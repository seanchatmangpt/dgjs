// BaseBrokerAdapter.ts

import { Subject } from "rxjs";
import { BaseMessage } from "./base-message";
import { DEFAULT_TOPIC } from "../constant/constants";

interface BrokerAdapter {
  publish(topic: string, message: BaseMessage): Promise<void>;
  subscribe(topic: string, onMessage: (message: BaseMessage) => void): void;
  unsubscribe(topic: string): void;
}

abstract class BaseBrokerAdapter implements BrokerAdapter {
  protected eventStream: Subject<BaseMessage>;

  constructor(eventStream: Subject<BaseMessage>) {
    this.eventStream = eventStream;
  }

  abstract publish(topic: string, message: BaseMessage): Promise<void>;
  abstract subscribe(
    topic: string,
    onMessage: (message: BaseMessage) => void
  ): void;
  abstract unsubscribe(topic: string): void;
}

export { BaseBrokerAdapter, BrokerAdapter };
