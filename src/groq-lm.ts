import { LM } from "./LM";
import Groq from "groq-sdk";
import {
  APIConnectionError,
  APIConnectionTimeoutError,
  APIError,
} from "./errors";

class GroqLM extends LM {
  public client: Groq;

  constructor(model: string = "mixtral-8x7b-32768", ...args: any[]) {
    super(model);
    this.provider = "groq";
    this.history = [];

    const groqApiKey = process.env.GROQ_API_KEY;

    if (!groqApiKey) {
      throw new Error("GROQ_API_KEY environment variable not found");
    }

    this.client = new Groq({ apiKey: groqApiKey });
  }

  async basicRequest(
    prompt: string,
    ...args: any[]
  ): Promise<Groq.Chat.ChatCompletion> {
    try {
      return await this.client.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        model: this.kwargs.model,
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
    return [chatCompletion.choices[0].message.content];
  }

  async forward(prompt: string, ...args: any[]): Promise<string[]> {
    return this.__call(prompt, ...args);
  }

  _getChoiceText(choice: Groq.Chat.ChatCompletion): string {
    return choice.choices[0].message.content;
  }
}

export { GroqLM };
