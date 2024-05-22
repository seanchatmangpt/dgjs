import { vi } from "vitest";
import { BaseActor } from "../src";

import 'dotenv/config'

type ActorMethods<T> = {
  // @ts-ignore
  [P in keyof T]?: T[P] extends (...args: any[]) => any ? vi.ViFn<T[P]> : never;
};

type MockActorOptions<T extends BaseActor> = ActorMethods<T> & {
  actorId?: string;
};

export function createMockActor<T extends BaseActor>(
  ActorClass: new (...args: any[]) => T,
  options: MockActorOptions<T> = {},
): T {
  // Create a proxy to intercept and handle method calls
  const handler: ProxyHandler<T> = {
    get(target, prop, receiver) {
      if (typeof prop === "string" && options[prop as keyof T]) {
        // Return the mocked method if it was provided in options
        return options[prop as keyof T];
      }
      // Default behavior for methods not explicitly mocked
      const defaultBehavior = (...args: any[]) => {
        console.log(`Mock handling ${prop.toString()}:`, args);
      };
      return vi.fn(defaultBehavior);
    },
  };

  const mockActorInstance = new ActorClass() as T;
  const proxy = new Proxy<T>(mockActorInstance, handler);
  return proxy;
}
