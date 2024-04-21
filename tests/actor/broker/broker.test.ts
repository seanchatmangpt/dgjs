// MessageBroker.ts

import express, { Request, Response } from "express";

interface Message {
  id: string;
  content: string;
}

interface MessageHandler {
  (message: Message): void;
}

interface WebhookHandler {
  (request: Request, response: Response): void;
}

class MessageBroker {
  private messageHandlers: Map<string, MessageHandler[]> = new Map();
  private webhookHandlers: Map<string, WebhookHandler[]> = new Map();
  app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.post("/webhook/:topic", this.handleWebhookRequest.bind(this));
  }

  public subscribe(
    topic: string,
    handler: MessageHandler | WebhookHandler,
  ): void {
    if (!this.messageHandlers.has(topic)) {
      this.messageHandlers.set(topic, []);
    }
    if (!this.webhookHandlers.has(topic)) {
      this.webhookHandlers.set(topic, []);
    }

    if (typeof handler === "function") {
      if (handler.length === 1) {
        this.messageHandlers.get(topic)?.push(handler as MessageHandler);
      } else if (handler.length === 2) {
        this.webhookHandlers.get(topic)?.push(handler as WebhookHandler);
      }
    } else {
      throw new Error("Invalid handler provided.");
    }
  }

  public publish(topic: string, message: Message): void {
    const handlers = this.messageHandlers.get(topic);
    if (handlers) {
      handlers.forEach((handler) => handler(message));
    }
  }

  public async sendToZapier(message: Message): Promise<Message> {
    // Simulate sending message to Zapier
    console.log("Sending message to Zapier:", message);
    return { id: message.id, content: "Message processed by Zapier" };
  }

  public async sendToStripe(message: Message): Promise<Message> {
    // Simulate sending message to Stripe
    console.log("Sending message to Stripe:", message);
    return { id: message.id, content: "Message processed by Stripe" };
  }

  public async sendToGoHighLevel(message: Message): Promise<Message> {
    // Simulate sending message to Go High Level
    console.log("Sending message to Go High Level:", message);
    return { id: message.id, content: "Message processed by Go High Level" };
  }

  private handleWebhookRequest(request: Request, response: Response): void {
    const topic = request.params.topic || "";
    const handlers = this.webhookHandlers.get(topic);
    if (handlers) {
      handlers.forEach((handler) => handler(request, response));
    } else {
      response
        .status(404)
        .send("No webhook handlers registered for this topic.");
    }
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Message broker listening on port ${port}`);
    });
  }
}

import { describe, beforeEach, it, expect, afterEach, vi } from "vitest";
import { ActorSystem } from "./ActorSystem";
import { WebHookBrokerAdapter } from "./WebHookBrokerAdapter";
import { Subject } from "rxjs";
import { BaseMessage } from "./base-message";
import express from "express";
import { TestActor } from "./TestActor"; // Assume this is an actor you've defined
import request from "supertest";

describe("ActorSystem with WebHookBrokerAdapter", () => {
  let actorSystem: ActorSystem;
  let eventStream: Subject<BaseMessage>;
  let webHookBrokerAdapter: WebHookBrokerAdapter;
  let app: express.Application;

  beforeEach(() => {
    eventStream = new Subject<BaseMessage>();
    actorSystem = new ActorSystem();
    webHookBrokerAdapter = new WebHookBrokerAdapter(eventStream);
    actorSystem.addBrokerAdapter(webHookBrokerAdapter); // Assuming this method exists to integrate broker adapters
    app = express();
    app.use("/webhook", webHookBrokerAdapter.getRouter()); // Assuming getRouter is a method that returns express.Router
  });

  afterEach(() => {
    // Cleanup resources, if any
    eventStream.unsubscribe();
  });

  it("handles incoming webhook requests and publishes messages to the ActorSystem", async () => {
    const testActor = actorSystem.actorOf(TestActor);
    const messageHandlerSpy = vi.spyOn(testActor, "handleMessage");
    const topic = "webhookTopic";
    const webhookPayload = { message: "Test webhook payload" };

    await request(app)
      .post(`/webhook/${topic}`)
      .send(webhookPayload)
      .expect(200);

    expect(messageHandlerSpy).toHaveBeenCalledOnce();
    expect(messageHandlerSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        topic,
        payload: webhookPayload,
      }),
    );
  });

  it("simulates data passing between services using actors", async () => {
    const zapierActorSpy = vi.spyOn(
      actorSystem.actorOf(TestActor, "zapier"),
      "handleMessage",
    );
    const stripeActorSpy = vi.spyOn(
      actorSystem.actorOf(TestActor, "stripe"),
      "handleMessage",
    );
    const goHighLevelActorSpy = vi.spyOn(
      actorSystem.actorOf(TestActor, "gohighlevel"),
      "handleMessage",
    );

    const initialMessage = new BaseMessage({
      topic: "initialTopic",
      payload: { id: "1", content: "Initial message" },
    });
    actorSystem.publish(initialMessage);

    // Assuming asynchronous message handling, wait a bit for the actors to process the message
    await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust timing as necessary

    expect(zapierActorSpy).toHaveBeenCalled();
    expect(stripeActorSpy).toHaveBeenCalled();
    expect(goHighLevelActorSpy).toHaveBeenCalled();
  });

  // More tests could be added here, following the same pattern
});
