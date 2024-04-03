import { LM } from "./LM";

class DummyLM extends LM {
  answers: string[] | { [key: string]: string };
  followExamples: boolean;

  constructor(
    answers: string[] | { [key: string]: string },
    followExamples: boolean = false
  ) {
    super("dummy-model");
    this.provider = "dummy";
    this.answers = answers;
    this.followExamples = followExamples;
  }

  async basicRequest(
    prompt: string,
    n: number = 1,
    ...args: any[]
  ): Promise<any> {
    const dummyResponse: { choices: any[] } = { choices: [] };

    for (let i = 0; i < n; i++) {
      let answer: string | null = null;

      if (this.followExamples) {
        const prefix = prompt.split("\n").pop()!;
        const [_instructions, _format, ...examples] = prompt.split("\n---\n");
        const examplesStr = examples.join("\n");
        const possibleAnswers = examplesStr.match(
          new RegExp(`${prefix}\\s*(.*)`, "g")
        );
        if (possibleAnswers) {
          answer = possibleAnswers[possibleAnswers.length - 1].trim();
          console.log(
            `DummyLM found previous example for ${prefix} with value ${answer}`
          );
        } else {
          console.log(`DummyLM couldn't find previous example for ${prefix}`);
        }
      }

      if (answer === null) {
        if (typeof this.answers === "object" && !Array.isArray(this.answers)) {
          answer =
            Object.entries(this.answers).find(([k]) =>
              prompt.includes(k)
            )?.[1] ?? null;
        } else {
          answer = this.answers.length > 0 ? this.answers.shift()! : null;
        }
      }

      answer = answer ?? "No more responses";

      dummyResponse.choices.push({
        text: answer,
        finish_reason: "simulated completion",
      });

      const RED = "\x1b[31m";
      const GREEN = "\x1b[32m";
      const RESET = "\x1b[0m";
      console.log("=== DummyLM ===");
      process.stdout.write(prompt);
      console.log(`${RED}${answer}${RESET}`);
      console.log("===");
    }

    const historyEntry = {
      prompt: prompt,
      response: dummyResponse,
      kwargs: args,
      raw_kwargs: args,
    };
    this.history.push(historyEntry);

    return dummyResponse;
  }

  async __call(
    prompt: string,
    onlyCompleted: boolean = true,
    returnSorted: boolean = false,
    ...args: any[]
  ): Promise<string[]> {
    const response = await this.basicRequest(prompt, ...args);
    const choices = response.choices;
    return choices.map((choice: any) => choice.text);
  }

  getConvo(index: number): string {
    return (
      this.history[index].prompt +
      " " +
      this.history[index].response.choices[0].text
    );
  }

  protected _getChoiceText(choice: any): string {
    return choice.text;
  }
}

export { DummyLM };
