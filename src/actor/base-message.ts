import { v4 as uuid } from "uuid";
import { DEFAULT_TOPIC } from "../constant/constants";
import { BaseModel } from "../ddd/base-repository";

class BaseMessage extends BaseModel {
  id: string; // Universally unique identifier for the message
  topic: string; // Represents the channel, topic, queue, or subject the message pertains to
  timestamp: number; // Epoch time in milliseconds for when the message was created or sent
  contentType: string; // MIME type indicating the format of the content, e.g., "application/json"
  content: string; // The payload of the message, typically in a serialized format
  attributes: Record<string, string>; // Key-value pairs for additional metadata, akin to headers

  constructor(data?: {
    id?: string;
    topic?: string;
    timestamp?: number;
    contentType?: string;
    content?: string;
    attributes?: Record<string, string>;
  }) {
    super();
    this.id = data?.id || uuid();
    this.topic = data?.topic || DEFAULT_TOPIC;
    this.timestamp = data?.timestamp || Date.now();
    this.contentType = data?.contentType || "application/json";
    this.content = data?.content || "";
    this.attributes = {
      ...data?.attributes,
      messageType: data?.attributes?.messageType || "BaseMessage",
    };
  }
}

export { BaseMessage };
