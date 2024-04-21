import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import axios from "axios";
import { Subject } from "rxjs";
import express from "express";
import request from "supertest";
import { ActorSystem, BaseMessage } from "../../../src";
import { WebHookBrokerAdapter } from "../../../src/actor/broker/web-hook-broker-adapter";

vi.mock("axios");
// @ts-ignore
const mockedAxios = axios as vi.Mocked<typeof axios>;

describe("ActorSystem and WebHookBrokerAdapter Integration", () => {
  let actorSystem: ActorSystem;
  let eventStream: Subject<BaseMessage>;
  let webhookAdapter: WebHookBrokerAdapter;
  const webhookUrl = "http://localhost:3000/webhook";
  const expressApp = express();

  beforeEach(() => {
    eventStream = new Subject<BaseMessage>();
    webhookAdapter = new WebHookBrokerAdapter(webhookUrl, 9999);
    actorSystem = new ActorSystem();
    actorSystem.registerBrokerAdapter(webhookAdapter);
  });

  it("correctly routes received webhook to the actor system", async () => {
    const testMessage = { payload: "test data", topic: "test-topic" };

    // Simulate receiving a webhook
    await request(webhookAdapter.app)
      .post("/webhook/test-topic")
      .send(testMessage)
      .expect(200, { message: "Webhook received" });

    // Add verification that the actor system received and processed the message
    // This may involve spying on methods within the actor system or actors themselves
  });

  it("publishes messages as webhooks correctly", async () => {
    const testMessage = new BaseMessage({
      content: "Test webhook response",
      topic: "test-topic",
    });

    mockedAxios.post.mockResolvedValueOnce({
      status: 200,
      data: { message: "Delivered" },
    });

    // Trigger the system to publish a message
    await actorSystem.publish(testMessage);

    // Verify the webhook was sent
    expect(mockedAxios.post).toHaveBeenCalledWith(
      webhookUrl,
      expect.objectContaining({ message: testMessage }),
    );
  });

  it("handles errors in webhook receiving gracefully", async () => {
    // Simulate an error scenario in receiving a webhook
    // This might involve mocking the express app to throw an error and ensuring it's handled
    // Assert error handling logic
  });

  it.skip("handles errors in publishing webhooks gracefully", async () => {
    const errorMessage = "Simulated network failure";
    mockedAxios.post.mockRejectedValueOnce(new Error(errorMessage));

    // Attempt to publish a message, expecting an error to be handled gracefully
    const testMessage = new BaseMessage({
      content: "Test failure case",
      topic: "test-topic",
    });
    await expect(actorSystem.publish(testMessage)).rejects.toThrow(
      errorMessage,
    );
  });

  it("removes all listeners from the Express application", async () => {
    // Spy on the event listener function
    const listenerSpy = vi.spyOn(webhookAdapter.app, "removeAllListeners");

    // Call the method to remove listeners
    webhookAdapter.onShutdown();

    // Verify that the removeAllListeners method was called
    expect(listenerSpy).toHaveBeenCalled();

    const port = 9999; // Port to check

    // Create a new Express application
    const app = express();

    // Attempt to listen on the specified port
    const server = app.listen(port, () => {
      console.log(`Port ${port} is available`);
      server.close(); // Close the server if the port is available
    });

    // Listen for server errors (indicating the port is in use)
    server.on("error", (error) => {
      // @ts-ignore
      if (error.code === "EADDRINUSE") {
        console.log(`Port ${port} is still in use`);
      } else {
        console.error(
          "Error occurred while checking port availability:",
          error,
        );
      }
    });
  });

  afterEach(() => {
    // Cleanup: stop the webhook server to prevent it from interfering with other tests
    webhookAdapter.onShutdown();
  });
});
