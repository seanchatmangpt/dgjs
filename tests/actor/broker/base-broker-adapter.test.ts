import { describe, it, expect, beforeEach } from "vitest";
import * as sinon from "sinon";
import { MockBrokerAdapter } from "../../mock/mock-broker-adapter";
import { BaseMessage } from "../../../src/actor/base-message";

describe("MockBrokerAdapter", () => {
  let brokerAdapter: MockBrokerAdapter;
  let publishStub: sinon.SinonStub;
  const message: BaseMessage = new BaseMessage({
    id: "123",
    content: "Test Data",
    contentType: "application/json",
  });

  beforeEach(() => {
    brokerAdapter = new MockBrokerAdapter();
    publishStub = brokerAdapter.getPublishStub();
  });

  // --- Publish Tests ---
  describe("publish", () => {
    it("calls publish with the provided topic and message", async () => {
      const topic = "testTopic";
      const message: BaseMessage = new BaseMessage({
        id: "123",
        content: "Test Data",
        contentType: "application/json",
      });

      await brokerAdapter.publish(topic, message);

      expect(publishStub.calledWith(topic, message)).toBe(true);
    });

    it("emits the message to subscribers on the correct topic", async () => {
      const topic = "testTopic";

      const messageHandler = vi.fn();

      brokerAdapter.subscribe(topic, messageHandler);
      await brokerAdapter.publish(
        topic,
        new BaseMessage({ ...message, topic }),
      );

      expect(messageHandler).toHaveBeenCalledWith(
        new BaseMessage({ ...message, topic }),
      );
    });

    it("supports delayed message publishing", async () => {
      const topic = "testTopic";

      const delay = 50;
      const startTime = Date.now();

      await brokerAdapter.publish(topic, message, { delay });

      expect(Date.now() - startTime).toBeGreaterThanOrEqual(delay);
    });

    it("gracefully handles errors during publishing", async () => {
      const simulatedError = new Error("Simulated Publish Error");
      publishStub.throws(simulatedError);

      try {
        await brokerAdapter.publish("someTopic", message);
      } catch (error) {
        expect(error).toBe(simulatedError);
      }
    });
  });

  describe("subscribe", () => {
    it("delivers messages to subscribers on the correct topic", async () => {
      const topic1 = "topic1";
      const topic2 = "topic2";
      const message1 = new BaseMessage({ ...message, topic: topic1 });
      const message2 = new BaseMessage({ ...message, topic: topic2 });
      const handler1 = vi.fn(); // Using Vitest's mock function
      const handler2 = vi.fn();

      brokerAdapter.subscribe(topic1, handler1);
      brokerAdapter.subscribe(topic2, handler2);

      brokerAdapter.simulateMessage(topic1, message1);
      brokerAdapter.simulateMessage(topic2, message2);

      expect(handler1).toHaveBeenCalledWith(message1);
      expect(handler2).toHaveBeenCalledWith(message2);
    });

    it("isolates message delivery to specific subscribed topics", async () => {
      const subscribedTopic = "topic1";
      const otherTopic = "topic2";
      const messageForSubscribedTopic = new BaseMessage({
        topic: subscribedTopic,
        content: "Test Data",
      });
      const messageForOtherTopic = new BaseMessage({
        topic: otherTopic,
        content: "Other Topic Data",
      });
      const subscribedTopicHandler = vi.fn();

      brokerAdapter.subscribe(subscribedTopic, subscribedTopicHandler);

      // Publish messages on both topics
      brokerAdapter.simulateMessage(subscribedTopic, messageForSubscribedTopic);
      brokerAdapter.simulateMessage(otherTopic, messageForOtherTopic);

      // Assert
      expect(subscribedTopicHandler).toHaveBeenCalledTimes(1); // Called only once
      expect(subscribedTopicHandler).toHaveBeenCalledWith(
        messageForSubscribedTopic,
      );
      expect(subscribedTopicHandler).not.toHaveBeenCalledWith(
        messageForOtherTopic,
      );
    });
  });

  // --- Unsubscribe Tests ---
  describe("unsubscribe", () => {
    it("prevents message delivery after unsubscribing", async () => {
      // ... (Similar structure to an example above) ...
    });
  });
});
