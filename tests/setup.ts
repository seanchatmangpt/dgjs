import { beforeEach, afterEach } from "vitest";
import nock from "nock";
import { GHL } from "../src/ghl";
import { Model } from "../src/model";
import "dotenv/config";
import * as fs from "fs";
import * as path from "path";
import { BaseActor } from "../src";

// Function to log network calls to a file
function logNetworkCalls(message: string) {
  const logFilePath = path.resolve(__dirname, "network-log.txt");
  fs.appendFileSync(logFilePath, message + "\n", "utf8");
}

beforeAll(() => {
  nock.recorder.rec({
    output_objects: true,
    logging: logNetworkCalls,
  });
});

beforeEach(() => {
  // Reset nock
  nock.cleanAll();

  // Mock the GHL and Model classes
  const mockGHL = new GHL();
  const mockModel = new Model();

  // Mock methods
  mockGHL.checkInstallationExists = vi.fn().mockReturnValue(true);
  mockModel.getAccessToken = vi.fn().mockReturnValue("test_token");
  mockModel.getRefreshToken = vi.fn().mockReturnValue("test_refresh_token");
  mockModel.saveInstallationInfo = vi.fn();
  mockModel.setAccessToken = vi.fn();
  mockModel.setRefreshToken = vi.fn();

  const api_domain =
    process.env.GHL_API_DOMAIN || "https://api.gohighlevel.com";

  // Mock HTTP requests using nock
  nock(api_domain).post("/oauth/token").reply(200, {
    access_token: "test_token",
    refresh_token: "test_refresh_token",
  });

  nock(api_domain).post("/oauth/locationToken").reply(200, {
    access_token: "location_token",
    refresh_token: "location_refresh_token",
  });
});

afterAll(() => {
  // Clean up nock after each test
  nock.cleanAll();
  nock.recorder.clear();
});

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
