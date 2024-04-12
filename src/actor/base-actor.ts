import { BaseMessage } from "./base-message";
import { ActorSystem } from "./actor-system";
import { v4 as uuid } from "uuid";

abstract class BaseActor {
  public actorId: string;
  public actorSystem: ActorSystem;

  constructor(actorSystem: ActorSystem, actorId?: string, ...rest: any[]) {
    this.actorId = actorId || uuid();
    this.actorSystem = actorSystem;
  }

  async handleMessage(message: BaseMessage): Promise<void> {
    console.log(`Received message: ${message.constructor.name}`);
    // Construct the expected handler method name based on the message type
    const handlerMethodName = `handle${message.constructor.name}`;
    // Check if the handler exists and is a function
    if (typeof (this as any)[handlerMethodName] === "function") {
      console.log(`Handling message: ${message.constructor.name}`);
      // Call the handler method with the message
      await (this as any)[handlerMethodName](message);
    }
    // If there's no handler method, do nothing
  }

  // Publish a message to the system
  publish(message: BaseMessage): void {
    this.actorSystem.publish(message);
  }

  // Directly send a message to another actor in the system
  send(actorId: string, message: BaseMessage): void {
    this.actorSystem.send(actorId, message);
  }

  terminate(): void {
    console.log(`Terminating actor ${this.actorId}`);
    // Implement actor termination logic
  }
}

export { BaseActor };
