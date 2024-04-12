import { BaseRepository } from "./base-repository";
import { BaseMessage } from "../actor/base-message";

class BaseMessageRepository extends BaseRepository<BaseMessage> {
  constructor(storageFile: string) {
    super(BaseMessage, storageFile);
  }

  public getByTopic(topic: string): BaseMessage[] {
    const messages = this.readData();
    return messages.filter((message) => message.topic === topic);
  }

  public getByMessageType(messageType: string): BaseMessage[] {
    const messages = this.readData();
    return messages.filter(
      (message) => message.attributes.messageType === messageType,
    );
  }
}

export { BaseMessageRepository };
