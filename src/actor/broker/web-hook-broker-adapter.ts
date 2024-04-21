import express, { Express } from "express";
import { Subject } from "rxjs";
import axios from "axios";
import { BaseMessage } from "../base-message";
import { DEFAULT_TOPIC } from "../../constant/constants";
import { BaseBrokerAdapter } from "./base-broker-adapter";

class WebHookMessage extends BaseMessage {
  constructor(public payload: any) {
    super();
  }
}

class WebHookBrokerAdapter extends BaseBrokerAdapter {
  app: Express;
  port: number;
  webhookUrl: string;

  /**
   * Initializes a new instance of the WebHookBrokerAdapter.
   * @param webhookUrl The URL to which messages will be published.
   * @param port The port on which the webhook server will listen.
   */
  constructor(webhookUrl: string, port: number = 3000) {
    super();
    this.app = express();
    this.port = port;
    this.webhookUrl = webhookUrl;
    this.setupWebhookEndpoint();
  }

  private setupWebhookEndpoint(): void {
    this.app.use(express.json());
    this.app.post("/webhook/:topic", (req, res) => {
      const topic = req.params.topic || DEFAULT_TOPIC;
      const message = new WebHookMessage(req.body);
      message.topic = topic;
      this.eventStream?.next(message);
      res.status(200).send({ message: "Webhook received" });
    });
  }

  /**
   * Starts the webhook server.
   */
  public start(): void {
    this.app.listen(this.port, () =>
      console.log(`Webhook broker listening on port ${this.port}`),
    );
  }

  /**
   * Publishes a message to the configured webhook URL.
   * @param topic The topic to which the message should be published.
   * @param message The message to be published.
   * @returns A promise that resolves when the message has been successfully published.
   */
  async publish(topic: string, message: BaseMessage): Promise<void> {
    try {
      await axios.post(this.webhookUrl, { topic, message });
      console.log(
        `Publishing message to topic "${topic}" with content:`,
        message,
      );
      message.topic = topic;
      this.eventStream?.next(message);
    } catch (error) {
      console.error("Error publishing message to webhook:", error);
    }
  }

  /**
   * Subscribes to a topic to receive messages published to it.
   * @param topic The topic to subscribe to.
   * @param onMessage The callback function to handle incoming messages.
   */
  subscribe(topic: string, onMessage: (message: BaseMessage) => void): void {
    this.eventStream?.subscribe({
      next: (message) => {
        if (message.topic === topic) {
          onMessage(message);
        }
      },
    });
  }

  /**
   * Unsubscribes from a topic.
   * @param topic The topic to unsubscribe from.
   */
  unsubscribe(topic: string): void {
    console.log(`Unsubscribing from topic: ${topic}`);
    // Implementation left as an exercise.
  }

  /**
   * Initializes the webhook broker adapter.
   */
  onInit(eventStream: Subject<BaseMessage>): void {
    super.onInit(eventStream);
    this.start();
  }

  /**
   * Cleans up resources used by the webhook broker adapter.
   */
  onShutdown(): void {
    super.onShutdown();
    this.app.removeAllListeners();
  }
}

export { WebHookBrokerAdapter };
