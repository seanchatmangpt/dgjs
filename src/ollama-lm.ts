import ollama from 'ollama';
import {
  APIConnectionError,
  APIConnectionTimeoutError,
  APIError,
} from "./errors";
import { LM } from "./lm";
import { ChatCompletionMessageParam } from "openai/src/resources/chat/completions";

const OllamaModels = {
  llama3: "llama3",
  phi3_3b: "phi3:3.8b",
  phi3_14b: "phi3:14.8b",
  phi3_instruct: "phi3:instruct",
  mixtral_7b: "mixtral:8x7b",
  mixtral_22b: "mixtral:8x22b",
  mixtral_instruct: "mixtral:instruct",
};

class OllamaLM extends LM {
  public client: any;

  constructor(model: string = OllamaModels.llama3, ...args: any[]) {
    super(model);
    this.provider = "Ollama";
    this.history = [];

    this.client = ollama;
  }

  async basicRequest(
    prompt: string,
    system: string = "",
    ...args: any[]
  ): Promise<any> {
    const messages: Array<ChatCompletionMessageParam> = []

    if (system) {
      messages.push({ role: "system", content: system });
    }
    messages.push({ role: "user", content: prompt });

    try {
      return await this.client.chat({
        model: this.kwargs.model,
        messages: messages,
      });
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "APIError") {
          throw new APIError(error.message, (error as APIError).status);
        } else if (error.name === "APIConnectionError") {
          throw new APIConnectionError(error.message);
        } else if (
          error.name === "APIConnectionTimeoutError" ||
          error.message.includes("timed out")
        ) {
          throw new APIConnectionTimeoutError(error.message);
        }
      }
      throw error;
    }
  }

  async __call(
    prompt: string,
    onlyCompleted: boolean = true,
    returnSorted: boolean = false,
    ...args: any[]
  ): Promise<string[]> {
    const chatCompletion = await this.basicRequest(prompt, ...args);
    return [chatCompletion.message.content || ""];
  }

  async forward(prompt: string, ...args: any[]): Promise<string[]> {
    return this.__call(prompt, ...args);
  }

  _getChoiceText(choice: any): string {
    return choice.message.content || "";
  }
}

export { OllamaLM, OllamaModels };