import { describe, it, expect, beforeEach, afterEach } from "vitest";
import request from "supertest";
import nock from "nock";
import { app } from "../src/go-high-level-app"; // Assuming the express app is exported from go-high-level-app.ts

describe("Go High Level App Endpoints", () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  it("should handle authorization on GET /authorize-handler", async () => {
    const code = "test_code";

    // Mock the token endpoint
    const scope = nock("https://services.leadconnectorhq.com")
      .post("/oauth/token", (body) => {
        return body.includes(`code=${code}`);
      })
      .reply(200, { access_token: "test_token" });

    const response = await request(app).get(`/authorize-handler?code=${code}`);
    expect(response.status).toBe(302); // Redirect status
    expect(response.header.location).toBe("https://app.gohighlevel.com/");
    expect(scope.isDone()).toBe(true); // Ensure the mock was called
  });

  afterEach(() => {
    nock.cleanAll();
  });
});
