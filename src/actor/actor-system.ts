import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { BaseActor } from "./base-actor";
import { BaseMessage } from "./base-message";
import { assert, isDefined } from "../utils/design-by-contract-tools";
import { BrokerAdapter } from "./broker/base-broker-adapter";
import { DEFAULT_TOPIC } from "../constant/constants";
import { v4 as uuid } from "uuid";

class ActorSystem {
  private actors: Map<string, BaseActor> = new Map();
  eventStream: Subject<BaseMessage> = new Subject();

  constructor(private brokerAdapters: BrokerAdapter[] = []) {
    this.eventStream = new Subject();

    // Setup interactions with BrokerAdapters
    this.brokerAdapters.forEach((adapter) => {
      this.registerBrokerAdapter(adapter);
    });
  }

  registerBrokerAdapter(adapter: BrokerAdapter) {
    adapter.onInit(this.eventStream);
    // 1. Subscribe adapter to relevant events from the eventStream
    adapter.subscribe(DEFAULT_TOPIC, (message) => {
      // You might apply filtering here
      this.eventStream.next(message);
    });

    // 2. Forward messages from publishMessage to adapters
    this.publish = (message: BaseMessage) => {
      // ... (Existing logic) ...
      this.eventStream.next(message);
      adapter.publish(message.topic, message);
    };
  }

  actorOf(
    actorClass: new (...args: any[]) => BaseActor,
    actorId?: string,
    ...rest: any[]
  ): BaseActor {
    const id = actorId || uuid();
    const actor = new actorClass(this, id, ...rest);
    this.registerActor(actor);
    return actor;
  }

  registerActor(actor: BaseActor): void {
    assert(actor !== null, "Actor must not be null");
    assert(
      !this.actors.has(actor.actorId),
      `Actor with ID ${actor.actorId} is already registered`,
    );

    console.log(`Registering actor ${actor.actorId}`);

    this.actors.set(actor.actorId, actor);
    this.subscribeActorToEventStream(actor);
  }

  unregisterActor(actorId: string): void {
    isDefined(
      this.actors.get(actorId),
      `Actor with ID ${actorId} does not exist`,
    );
    console.log(`Unregistering actor ${actorId}`);
    this.actors.delete(actorId);
  }

  private subscribeActorToEventStream(actor: BaseActor): void {
    console.log(`Subscribing actor ${actor.actorId} to event stream`);
    this.eventStream.subscribe({
      next: (msg) => actor.handleMessage(msg),
      error: (err) =>
        console.error(
          `Error in message stream for actor ${actor.actorId}:`,
          err,
        ),
      // Note: No need to complete as Subject won't complete unless the system shuts down
    });
  }

  publish(message: BaseMessage): void {
    isDefined(message, "Message must not be null");
    console.log("Publishing message:", message);
    this.eventStream.next(message);
  }

  send(actorId: string, message: BaseMessage): void {
    console.log("Sending message to actor", actorId, ":", message);
    const actor = this.actors.get(actorId);
    isDefined(actor, `Actor with ID ${actorId} does not exist`);
    isDefined(message, "Message must not be null");

    actor.handleMessage(message);
  }

  async shutdown(): Promise<void> {
    this.actors.forEach((actor) => actor.terminate());
    this.actors.clear();
    this.eventStream.complete();
  }

  // Utility function for waiting on a message, demonstrating use of generics with DbC
  async waitForMessage<T extends BaseMessage>(
    messageType: new (...args: any[]) => T,
  ): Promise<T> {
    // Declare 'subscription' outside but don't assign it yet.
    // 'let' is used because 'subscription' will be assigned later.
    let subscription: ReturnType<
      (typeof this.eventStream)["subscribe"]
    > | null = null;

    try {
      return await new Promise<T>((resolve, reject) => {
        subscription = this.eventStream
          .pipe(filter((msg): msg is T => msg instanceof messageType))
          .subscribe({
            next: resolve,
            error: reject,
            complete: () =>
              reject(
                new Error("Actor system shut down before message was received"),
              ),
          });
      });
    } finally {
      // Check if 'subscription' was assigned before trying to unsubscribe
      // to avoid "Cannot read property 'unsubscribe' of null" error.
      // if (subscription) {
      //   subscription.unsubscribe();
      // }
    }
  }
}

export { ActorSystem };
