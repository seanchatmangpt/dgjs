import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { ActorSystem, BaseActor, BaseMessage } from "../../src";
import { MockBrokerAdapter } from "../mock/mock-broker-adapter";

// Define a tests actor and message for use in the tests
class TestMessage extends BaseMessage {
  constructor(content: string) {
    super({ attributes: { messageType: "TestMessage" }, content });
  }
}

class TestActor extends BaseActor {
  public handleTestMessage(message: TestMessage) {
    console.log(`TestActor received message: ${message.content}`);
  }
}

describe("ActorSystem with MockBrokerAdapter", () => {
  let actorSystem: ActorSystem;
  let mockBrokerAdapter: MockBrokerAdapter;

  beforeEach(() => {
    // Initialize the MockBrokerAdapter
    mockBrokerAdapter = new MockBrokerAdapter();
    // Initialize the ActorSystem with the mock broker adapter
    actorSystem = new ActorSystem([mockBrokerAdapter]);
  });

  it.skip("publishes and receives messages through MockBrokerAdapter", async () => {
    const testMessage = new TestMessage("Hello, world!");
    const testActor = actorSystem.actorOf(TestActor) as TestActor;

    // Spy on the testActor's handleMessage method
    const handleMessageSpy = vi.spyOn(testActor, "handleTestMessage");

    // Simulate sending a message through the MockBrokerAdapter
    mockBrokerAdapter.simulateMessage("default_topic", testMessage);

    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async operations

    // Verify the handleMessage method was called with the tests message
    expect(handleMessageSpy).toHaveBeenCalledWith(testMessage);
  });

  it.skip("ensures messages are published to the correct topic", async () => {
    const testMessage = new TestMessage("Specific topic message");

    // Publish a message to a specific topic
    await actorSystem.publish({
      ...testMessage,
      topic: "specific_topic",
    });

    // Check if the publishStub was called with the correct topic and message
    expect(mockBrokerAdapter.getPublishStub()).toHaveBeenCalledWith(
      "specific_topic",
      testMessage,
    );

    // Additional assertions can be added here to verify the handling of the message if necessary
  });

  afterEach(() => {
    // Perform cleanup if necessary
    actorSystem.shutdown();
  });
});
