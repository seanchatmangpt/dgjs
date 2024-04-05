abstract class BaseMessage {
  actorId = -1;
  metadata: Record<string, any> = {};
  content?: string;
  messageType: string = "BaseMessage";

  constructor(data: Partial<BaseMessage>) {
    Object.assign(this, data);
  }
}

export { BaseMessage };
