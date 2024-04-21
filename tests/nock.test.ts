import { describe, it, expect } from "vitest";
import axios from "axios";
import nock from "nock";
import { WebHookBrokerAdapter } from "../src/actor/broker/web-hook-broker-adapter";

describe("nock basic usage", () => {
  it("should intercept HTTP requests", async () => {
    nock("https://example.com").get("/data").reply(200, { success: true });

    const response = await axios.get("https://example.com/data");
    expect(response.data).toEqual({ success: true });
  });
});

// Assuming WebHookBrokerAdapter has a method publish that uses axios to send data to a webhook URL.

describe("WebHookBrokerAdapter - External Publishing", () => {
  const webhookUrl = "https://external-service.com";
  const testMessage = { content: "Hello, world!" };

  beforeEach(() => {
    nock.cleanAll();
  });

  it("should correctly publish messages to the webhook URL", async () => {
    const adapter = new WebHookBrokerAdapter(webhookUrl);

    nock(webhookUrl)
      .post("/webhook", testMessage)
      .reply(200, { acknowledged: true });

    const result = await adapter.publish("/webhook", testMessage);
    expect(result).toEqual({ acknowledged: true });
  });

  afterEach(() => {
    nock.cleanAll();
  });
});
