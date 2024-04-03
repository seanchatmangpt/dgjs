import Groq from "groq-sdk";
import { GroqLM } from "../src/groq-lm";
import {
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
} from "groq-sdk/error";

describe("GroqLM", () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeAll(() => {
    originalEnv = process.env;
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    console.warn = jest.fn();
  });

  describe("constructor", () => {
    xtest("throws an error if GROQ_API_KEY is not set", () => {
      expect(() => new GroqLM()).toThrowError(
        "GROQ_API_KEY environment variable not found"
      );
    });

    test("sets the default model and initializes the client", () => {
      process.env.GROQ_API_KEY = "test_api_key";
      const groqLM = new GroqLM();
      expect(groqLM.kwargs.model).toBe("mixtral-8x7b-32768");
      expect(groqLM.client).toBeInstanceOf(Groq);
    });

    test("sets the provided model and initializes the client", () => {
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

    test("sends a request to the Groq API and returns the response", async () => {
      const prompt = "What is the capital of France?";
      const mockResponse: Groq.Chat.ChatCompletion = {
        choices: [
          {
            message: {
              content: "The capital of France is Paris.",
            },
          },
        ],
      } as any;
      jest
        .spyOn(groqLM.client.chat.completions, "create")
        .mockResolvedValue(mockResponse);

      const result = await groqLM.basicRequest(prompt);

      expect(groqLM.client.chat.completions.create).toHaveBeenCalledWith({
        messages: [{ role: "user", content: prompt }],
        model: "mixtral-8x7b-32768",
      });
      expect(result).toEqual(mockResponse);
    });

    test("handles API errors and throws an APIError", async () => {
      const prompt = "What is the capital of France?";
      const mockError = new APIError(400, "", "Bad Request", {});
      jest
        .spyOn(groqLM.client.chat.completions, "create")
        .mockRejectedValue(mockError);

      await expect(groqLM.basicRequest(prompt)).rejects.toThrow(APIError);
      expect(groqLM.client.chat.completions.create).toHaveBeenCalledWith({
        messages: [{ role: "user", content: prompt }],
        model: "mixtral-8x7b-32768",
      });
    });

    test("handles connection errors and throws an APIConnectionError", async () => {
      const prompt = "What is the capital of France?";
      const mockError = new APIConnectionError({
        message: "Connection Error",
        cause: new Error(),
      });
      jest
        .spyOn(groqLM.client.chat.completions, "create")
        .mockRejectedValue(mockError);

      await expect(groqLM.basicRequest(prompt)).rejects.toThrow(
        APIConnectionError
      );
      expect(groqLM.client.chat.completions.create).toHaveBeenCalledWith({
        messages: [{ role: "user", content: prompt }],
        model: "mixtral-8x7b-32768",
      });
    });

    xtest("handles timeout errors and throws an APIConnectionTimeoutError", async () => {
      const prompt = "What is the capital of France?";
      const mockError = new APIConnectionTimeoutError({
        message: "Request timed out",
      });
      jest
        .spyOn(groqLM.client.chat.completions, "create")
        .mockRejectedValue(mockError);

      await expect(groqLM.basicRequest(prompt)).rejects.toThrow(
        APIConnectionTimeoutError
      );
      expect(groqLM.client.chat.completions.create).toHaveBeenCalledWith({
        messages: [{ role: "user", content: prompt }],
        model: "mixtral-8x7b-32768",
      });
    });
  });

  describe("__call", () => {
    let groqLM: GroqLM;

    beforeEach(() => {
      process.env.GROQ_API_KEY = "test_api_key";
      groqLM = new GroqLM();
    });

    test("sends a request to the Groq API and returns the response", async () => {
      const prompt = "What is the capital of France?";
      const mockResponse: Groq.Chat.ChatCompletion = {
        choices: [
          {
            message: {
              content: "The capital of France is Paris.",
            },
          },
        ],
      } as any;
      jest.spyOn(groqLM, "basicRequest").mockResolvedValue(mockResponse);

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

    test("returns the content of the first choice", () => {
      const choice: Groq.Chat.ChatCompletion = {
        choices: [
          {
            message: {
              content: "The capital of France is Paris.",
            },
          },
        ],
      } as any;

      const result = groqLM._getChoiceText(choice);

      expect(result).toBe("The capital of France is Paris.");
    });
  });
  describe("Integration test", () => {
    test("sends a request to the Groq API and returns the response", async () => {
      const prompt = "What is the capital of France?";

      const result = await new GroqLM().__call(prompt);

      expect(result).toHaveLength(1);
      expect(result[0]).toContain("Paris");
    });
  });
});
