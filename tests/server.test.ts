import { describe, it, expect, beforeEach, afterEach } from "vitest";
import request from "supertest";
import nock from "nock";
import { app } from "../src/server"; // Assuming the express app is exported from server.ts

describe("Server Endpoints", () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  it("should return 'Hello, world!' on GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, world!");
  });

  it("should handle POST /data with valid data", async () => {
    const response = await request(app)
      .post("/data")
      .send({ name: "John", age: 30 });
    expect(response.status).toBe(200);
    expect(response.text).toBe("Received data: John, 30");
  });

  it("should return 400 on POST /data with missing fields", async () => {
    const response = await request(app).post("/data").send({ name: "John" });
    expect(response.status).toBe(400);
    expect(response.text).toBe("Name and age are required");
  });

  it("should return user ID on GET /user/:id", async () => {
    const response = await request(app).get("/user/123");
    expect(response.status).toBe(200);
    expect(response.text).toBe("User ID: 123");
  });

  it("should return search query on GET /search", async () => {
    const response = await request(app).get("/search?q=test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Search query: test");
  });

  it("should return 400 on GET /search without query parameter", async () => {
    const response = await request(app).get("/search");
    expect(response.status).toBe(400);
    expect(response.text).toBe('Query parameter "q" is required');
  });

  afterEach(() => {
    nock.cleanAll();
  });
});
