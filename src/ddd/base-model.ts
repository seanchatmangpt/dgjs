import { Validator } from "jsonschema";
import { extract } from "../utils/json-tools";

class BaseModel {
  id?: string;

  // Define an abstract method that each subclass must implement
  public getSchema(): object {
    throw new Error("Method not implemented.");
  }

  // Validate the model instance against its schema
  public validate(): void {
    const validator = new Validator();
    const validationResult = validator.validate(this, this.getSchema());
    if (!validationResult.valid) {
      throw new Error(
        `Invalid ${this.constructor.name} data: ${validationResult.errors.join(", ")}`,
      );
    }
  }

  // Convert the model schema to a string representation
  public static toStringSchema<T extends typeof BaseModel>(this: T): string {
    const schema = new this().getSchema();
    return JSON.stringify(schema, null, 2);
  }

  static fromString<T extends BaseModel>(this: new () => T, data: string): T {
    const parsedData = extract(data);
    const instance = new this();
    Object.assign(instance, parsedData);
    instance.validate();
    return instance;
  }

  static fromObject<T extends BaseModel>(this: new () => T, data: object): T {
    const instance = new this();
    Object.assign(instance, data);
    instance.validate();
    return instance;
  }
}

export { BaseModel };
