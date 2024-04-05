// tests/actorSystem.test.ts
import { describe, it, expect, beforeEach } from "vitest";
import MockScheduler from "../mock/mock-scheduler";
import { checkForEventConflicts } from "../mock/mock-event-scheduler";

describe("Actor System Event Scheduling", () => {
  let mockScheduler: MockScheduler;

  beforeEach(() => {
    mockScheduler = new MockScheduler();
    // Register mock jobs as needed
    mockScheduler.registerJob("eventCheck", () => {
      console.log("Event check job triggered");
      // Simulate event conflict check
      checkForEventConflicts([
        { id: "event1", rruleString: "FREQ=DAILY;COUNT=10" },
        // Additional mock events here
      ]);
    });
  });

  it("should trigger eventCheck job correctly", async () => {
    await mockScheduler.triggerJob("eventCheck");
    // Assertions about the outcome of the job
    expect(true).toBe(true); // Replace with your actual assertions
  });

  // More tests here
});
