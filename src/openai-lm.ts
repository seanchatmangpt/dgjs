import OpenAI from "openai";
import {
  APIConnectionError,
  APIConnectionTimeoutError,
  APIError,
} from "./errors";
import { LM } from "./lm";
import {ChatCompletionMessageParam} from "openai/src/resources/chat/completions";

const OpenAIModels = {
  gpt_4o: "gpt-4o",
  gpt_4_turbo: "gpt-4-turbo",
  gpt_3_5_turbo: "gpt-3.5-turbo",
};

class OpenAILM extends LM {
  public client: OpenAI;

  constructor(model: string = OpenAIModels.gpt_3_5_turbo, ...args: any[]) {
    super(model);
    this.provider = "OpenAI";
    this.history = [];

    const OpenAIApiKey = process.env.OPENAI_API_KEY;

    if (!OpenAIApiKey) {
      throw new Error("OPENAI_API_KEY environment variable not found");
    }

    this.client = new OpenAI({ apiKey: OpenAIApiKey });
  }

  async basicRequest(
    prompt: string,
    system: string = "",
    ...args: any[]
  ): Promise<OpenAI.Chat.ChatCompletion> {
    const messages: Array<ChatCompletionMessageParam> = []

    if (system) {
      messages.push({role: "system", content: system})
    }
    messages.push({role: "user", content: prompt})

    try {
      return await this.client.chat.completions.create({
        messages: messages,
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
    return [chatCompletion.choices[0]?.message.content || ""];
  }

  async forward(prompt: string, ...args: any[]): Promise<string[]> {
    return this.__call(prompt, ...args);
  }

  _getChoiceText(choice: any): string {
    return choice.choices[0]?.message.content || "";
  }
}

export { OpenAILM, OpenAIModels };
