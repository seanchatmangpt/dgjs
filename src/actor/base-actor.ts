import { BaseMessage } from "./base-message";
import { ActorSystem } from "./actor-system";

abstract class BaseActor {
  public actorId: number;
  public actorSystem: ActorSystem;

  constructor(actorId: number, actorSystem: ActorSystem, ...rest: any[]) {
    this.actorId = actorId;
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
    this.actorSystem.publishMessage(message);
  }

  // Directly send a message to another actor in the system
  sendMessage(actorId: number, message: BaseMessage): void {
    this.actorSystem.sendMessage(actorId, message);
  }

  terminate(): void {
    console.log(`Terminating actor ${this.actorId}`);
    // Implement actor termination logic
  }
}

export { BaseActor };
