import {
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
} from "./errors";

abstract class LM {
  public kwargs: {
    model: string;
    temperature: number;
    max_tokens: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
    n: number;
  };
  public provider: string;
  public history: any[];

  constructor(model: string) {
    this.kwargs = {
      model: model,
      temperature: 0.0,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      n: 1,
    };
    this.provider = "default";
    this.history = [];
  }

  abstract basicRequest(prompt: string, ...args: any[]): Promise<any>;

  async request(prompt: string, ...args: any[]): Promise<any> {
    return this.basicRequest(prompt, ...args);
  }

  printGreen(text: string, end: string = "\n"): void {
    console.log("\x1b[32m" + text + "\x1b[0m", end);
  }

  printRed(text: string, end: string = "\n"): void {
    console.log("\x1b[31m" + text + "\x1b[0m", end);
  }

  async inspectHistory(n: number = 1, skip: number = 0): Promise<void> {
    const provider: string = this.provider;
    let lastPrompt: string | null = null;
    const printed: [string, any][] = [];
    n = n + skip;

    for (const x of this.history.slice(-100).reverse()) {
      const prompt = x["prompt"];

      if (prompt !== lastPrompt) {
        if (provider === "clarifai") {
          printed.push([prompt, x["response"]]);
        } else {
          printed.push([
            prompt,
            provider === "cohere"
              ? x["response"].generations
              : x["response"]["choices"],
          ]);
        }
      }

      lastPrompt = prompt;

      if (printed.length >= n) {
        break;
      }
    }

    for (let idx = 0; idx < printed.length; idx++) {
      const [prompt, choices]: [string, any] = printed[
        printed.length - idx - 1
      ] || ["", ""];

      if (n - idx - 1 < skip) {
        continue;
      }

      console.log("\n\n\n");
      process.stdout.write(prompt);
      let text = "";

      if (provider === "cohere") {
        text = choices[0].text;
      } else if (provider === "openai" || provider === "ollama") {
        text = " " + this._getChoiceText(choices[0]).trim();
      } else if (provider === "clarifai") {
        text = choices;
      } else {
        text = choices[0]["text"];
      }

      this.printGreen(text, "");

      if (choices.length > 1) {
        this.printRed(` \t (and ${choices.length - 1} other completions)`, "");
      }

      console.log("\n\n\n");
    }
  }

  abstract __call(
    prompt: string,
    onlyCompleted?: boolean,
    returnSorted?: boolean,
    ...args: any[]
  ): Promise<string[]>;

  // copy(...args: any[]): LM {
  //     const kwargs = { ...this.kwargs, ...args };
  //     const model = kwargs.model;
  //     delete kwargs.model;
  //
  //     return new (this.constructor as typeof LM)(model, ...Object.values(kwargs));
  // }

  protected abstract _getChoiceText(choice: any): string;

  async forward(prompt: string, ...args: any[]): Promise<string[]> {
    return this.__call(prompt, ...args);
  }
}

export { LM };
