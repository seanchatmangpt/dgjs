import { BaseMessage } from "./base-message";

class MessageFactory {
  private static messageClassRegistry = new Map<
    string,
    new (data: any) => BaseMessage
  >();

  static registerMessageClass(cls: new (data: any) => BaseMessage) {
    this.messageClassRegistry.set(cls.name, cls);
  }

  static createMessage<T extends BaseMessage>(data: any): T {
    if (!data || !data.messageType) {
      throw new Error("Invalid message data");
    }

    const cls = this.messageClassRegistry.get(data.messageType);
    if (!cls) {
      throw new Error(`Unregistered message type: ${data.messageType}`);
    }

    return new cls(data) as T;
  }
}

export { MessageFactory };
