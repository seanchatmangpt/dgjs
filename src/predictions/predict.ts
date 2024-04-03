import { LM } from "../lm";
import { Template } from "../template";
import { Signature } from "../signature";

export class Predict {
  private lm: LM;
  private template: Template;

  constructor(private signature: Signature, lm: LM) {
    this.lm = lm;
    this.template = new Template(this.signature);
  }

  async forward(inputData: any): Promise<any> {
    const prompt = this.template.format(inputData);
    const response = await this.lm.forward(prompt);
    return this.processResponse(response[0]);
  }

  private processResponse(response: string): any {
    // Implement based on expected LM response format.
    return response;
  }
}
