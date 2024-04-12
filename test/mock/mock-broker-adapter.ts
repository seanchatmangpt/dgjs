import * as sinon from "sinon";
import {
  BaseBrokerAdapter,
  BrokerAdapter,
} from "../../src/actor/base-broker-adapter";
import { BaseMessage } from "../../src";
import { Subject, Observable, Subscription } from "rxjs";
import { filter } from "rxjs/operators";

class MockBrokerAdapter extends BaseBrokerAdapter {
  private subscriptions: Map<string, Subscription> = new Map();
  private publishStub: sinon.SinonStub;

  constructor(eventStream?: Subject<BaseMessage>) {
    super(eventStream || new Subject<BaseMessage>());
    this.publishStub = sinon.stub();
  }

  async publish(
    topic: string,
    message: BaseMessage,
    options?: { delay?: number }
  ): Promise<void> {
    this.publishStub(topic, message); // Record publish calls

    if (options?.delay) {
      await new Promise((resolve) => setTimeout(resolve, options.delay));
    }

    this.eventStream.next({ ...message, topic }); // Emit the message
  }

  subscribe(
    topic: string,
    onMessage: (message: BaseMessage) => void
  ): Subscription {
    const subscription = this.eventStream
      .pipe(filter((message) => message.topic === topic))
      .subscribe(onMessage);

    this.subscriptions.set(topic, subscription); // Store for unsubscribing
    return subscription;
  }

  unsubscribe(topic: string): void {
    const subscription = this.subscriptions.get(topic);
    subscription?.unsubscribe();
    this.subscriptions.delete(topic);
  }

  // --- Test Helpers ---

  getPublishStub(): sinon.SinonStub {
    return this.publishStub;
  }

  simulateMessage(topic: string, message: BaseMessage): void {
    this.eventStream.next({ ...message, topic });
  }
}

export { MockBrokerAdapter };
