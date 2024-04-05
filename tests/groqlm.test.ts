import {
  describe,
  beforeAll,
  afterAll,
  beforeEach,
  it,
  expect,
  vi,
} from "vitest";
import Groq from "groq-sdk";
import { GroqLM, GroqModels } from "../src/groq-lm";
import {
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
} from "groq-sdk/error";

describe("GroqLM", () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeAll(() => {
    originalEnv = { ...process.env };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  describe("constructor", () => {
    it.skip("throws an error if GROQ_API_KEY is not set", () => {
      expect(() => new GroqLM()).toThrowError(
        "GROQ_API_KEY environment variable not found"
      );
    });

    it("sets the default model and initializes the client", () => {
      process.env.GROQ_API_KEY = "test_api_key";
      const groqLM = new GroqLM();
      expect(groqLM.client).toBeInstanceOf(Groq);
    });

    it("sets the provided model and initializes the client", () => {
      process.env.GROQ_API_KEY = "test_api_key";
      const groqLM = new GroqLM("custom-model");
      expect(groqLM.kwargs.model).toBe("custom-model");
      expect(groqLM.client).toBeInstanceOf(Groq);
    });
  });

  describe("basicRequest", () => {
    let groqLM: GroqLM;

    beforeEach(() => {
      process.env.GROQ_API_KEY = "test_api_key";
      groqLM = new GroqLM();
    });

    it("sends a request to the Groq API and returns the response", async () => {
      const prompt = "What is the capital of France?";
      const mockResponse = {
        choices: [{ message: { content: "The capital of France is Paris." } }],
      };

      vi.spyOn(groqLM.client.chat.completions, "create").mockResolvedValue(
        // @ts-ignore
        mockResponse
      );

      const result = await groqLM.basicRequest(prompt);

      expect(groqLM.client.chat.completions.create).toHaveBeenCalledWith({
        messages: [{ role: "user", content: prompt }],
        model: GroqModels.llama2,
      });
      expect(result).toEqual(mockResponse);
    });

    it("handles API errors and throws an APIError", async () => {
      const prompt = "What is the capital of France?";
      const mockError = new APIError(400, "", "Bad Request", {});

      vi.spyOn(groqLM.client.chat.completions, "create").mockRejectedValue(
        mockError
      );

      await expect(groqLM.basicRequest(prompt)).rejects.toThrow(APIError);
    });

    it("handles connection errors and throws an APIConnectionError", async () => {
      const prompt = "What is the capital of France?";
      const mockError = new APIConnectionError({
        message: "Connection Error",
        cause: new Error(),
      });

      vi.spyOn(groqLM.client.chat.completions, "create").mockRejectedValue(
        mockError
      );

      await expect(groqLM.basicRequest(prompt)).rejects.toThrow(
        APIConnectionError
      );
    });

    it.skip("handles timeout errors and throws an APIConnectionTimeoutError", async () => {
      const prompt = "What is the capital of France?";
      const mockError = new APIConnectionTimeoutError({
        message: "Request timed out",
      });

      vi.spyOn(groqLM.client.chat.completions, "create").mockRejectedValue(
        mockError
      );

      await expect(groqLM.basicRequest(prompt)).rejects.toThrow(
        APIConnectionTimeoutError
      );
    });
  });

  describe("__call", () => {
    let groqLM: GroqLM;

    beforeEach(() => {
      process.env.GROQ_API_KEY = "test_api_key";
      groqLM = new GroqLM();
    });

    it("sends a request to the Groq API and returns the response", async () => {
      const prompt = "What is the capital of France?";
      const mockResponse = {
        choices: [{ message: { content: "The capital of France is Paris." } }],
      };

      // @ts-ignore
      vi.spyOn(groqLM, "basicRequest").mockResolvedValue(mockResponse);

      const result = await groqLM.__call(prompt);

      expect(groqLM.basicRequest).toHaveBeenCalledWith(prompt);
      expect(result).toEqual(["The capital of France is Paris."]);
    });
  });

  describe("_getChoiceText", () => {
    let groqLM: GroqLM;

    beforeEach(() => {
      groqLM = new GroqLM();
    });

    it("returns the content of the first choice", () => {
      const choice = {
        choices: [{ message: { content: "The capital of France is Paris." } }],
      };

      const result = groqLM._getChoiceText(choice);

      expect(result).toBe("The capital of France is Paris.");
    });
  });

  // Assuming a valid GroqLM integration environment
  describe("Integration test", () => {
    it("sends a request to the Groq API and returns the response", async () => {
      const prompt = "What is the capital of France?";

      const result = await new GroqLM().__call(prompt);

      expect(result).toHaveLength(1);
      expect(result[0]).toContain("Paris");
    });
  });
});
