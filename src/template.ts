import "reflect-metadata";

export class Template {
  constructor(private signatureInstance: any) {}

  public format(example: any): string {
    let prompt = Reflect.getMetadata(
      "signatureDocumentation",
      this.signatureInstance.constructor
    );
    prompt += "\n\n---\n\nFollow the following format.\n\n";

    // Process input fields with descriptions.
    Object.keys(this.signatureInstance).forEach((key) => {
      const inputMeta = Reflect.getMetadata(
        "inputField",
        this.signatureInstance,
        key
      );
      if (inputMeta) {
        const fieldName = this.humanizeFieldName(key);
        prompt += `${fieldName}: ${inputMeta.desc}\n`;
      }
    });

    // Process the output field if present.
    const outputFieldKey = Object.keys(this.signatureInstance).find((key) =>
      Reflect.hasMetadata("outputField", this.signatureInstance, key)
    );
    if (outputFieldKey) {
      const { prefix } = Reflect.getMetadata(
        "outputField",
        this.signatureInstance,
        outputFieldKey
      );
      prompt += `${prefix}\n`;
    }

    prompt += "\n---\n\n";

    // Append example values to input fields.
    Object.keys(example).forEach((key) => {
      const fieldName = this.humanizeFieldName(key);
      let value = example[key];

      prompt += `${fieldName}: ${value}\n`;
    });

    return prompt.trim();
  }

  private humanizeFieldName(fieldName: string): string {
    // Convert camelCase to "Title Case".
    const titleCase = fieldName
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^./, (str) => str.toUpperCase())
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
    return titleCase.replace("Json", "JSON"); // Ensure acronyms like JSON are correctly capitalized.
  }
}
