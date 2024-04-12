import { DummyLM } from "../src/dummy-lm";
import {
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
} from "../src/errors";

describe("DummyLM", () => {
  describe("constructor", () => {
    test("should properly initialize with an array of answers", () => {
      const answers = ["Yes", "No", "Maybe"];
      const model = new DummyLM(answers);
      expect(model.provider).toBe("dummy");
      expect(model.answers).toEqual(answers);
    });

    test("should properly initialize with an object of answers", () => {
      const answers = { question1: "Yes", question2: "No" };
      const model = new DummyLM(answers);
      expect(model.provider).toBe("dummy");
      expect(model.answers).toEqual(answers);
    });
  });

  describe("basicRequest", () => {
    test("returns the correct response for a known prompt", async () => {
      const answers = ["Yes"];
      const model = new DummyLM(answers);
      const response = await model.basicRequest("Is the sky blue?");
      expect(response.choices[0].text).toBe("Yes");
    });

    test("handles empty responses correctly", async () => {
      const model = new DummyLM([]);
      const response = await model.basicRequest("Unknown question");
      expect(response.choices[0].text).toBe("No more responses");
    });
  });

  describe("__call", () => {
    test("should return an array of completions", async () => {
      const answers = ["Yes", "No"];
      const model = new DummyLM(answers);
      const completions = await model.__call("Is the sky blue?");
      expect(completions).toEqual(["Yes"]);
    });
  });

  describe("Error handling and edge cases", () => {
    // Add test to handle API errors, connection errors, and timeouts
    // You might need to mock these errors within the `DummyLM` class for testing purposes
  });

  describe("DummyLM Tests", () => {
    it('should return "Yes" for "Is the sky blue?" question', async () => {
      // Initialize DummyLM with an answer for the test case
      const answers = ["Yes"]; // Assuming a simple case where we expect a static answer
      const dummyLM = new DummyLM(answers);

      // Perform the request
      const response = await dummyLM.basicRequest("Is the sky blue?");

      // Extract the answer from the first choice
      const answer = response.choices[0].text;

      // Assert that the received answer is what we expect
      expect(answer).toContain("Yes");
    });
  });
});
