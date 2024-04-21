// BaseBrokerAdapter.ts

import { Subject } from "rxjs";
import { BaseMessage } from "../base-message";
import { DEFAULT_TOPIC } from "../../constant/constants";

interface BrokerAdapter {
  publish(topic: string, message: BaseMessage): Promise<void>;
  subscribe(topic: string, onMessage: (message: BaseMessage) => void): void;
  unsubscribe(topic: string): void;

  onInit(eventStream: Subject<BaseMessage>): void;
}

abstract class BaseBrokerAdapter implements BrokerAdapter {
  protected eventStream?: Subject<BaseMessage>;

  protected constructor() {}

  abstract publish(topic: string, message: BaseMessage): Promise<void>;
  abstract subscribe(
    topic: string,
    onMessage: (message: BaseMessage) => void,
  ): void;
  abstract unsubscribe(topic: string): void;

  onInit(eventStream: Subject<BaseMessage>): void {
    this.eventStream = eventStream;
  }

  onShutdown() {}
}

export { BaseBrokerAdapter, BrokerAdapter };
