import { validate, ValidationError } from "class-validator";
import { plainToClass, classToPlain } from "class-transformer";
import { createSchema, TJSArgs } from "typescript-json-schema";

export class BaseClass {
  constructor(data?: Record<string, any>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  async validate(): Promise<ValidationError[]> {
    return validate(this);
  }

  toJSON(): Record<string, any> {
    return classToPlain(this);
  }

  static fromJSON<T extends BaseClass>(
    cls: new () => T,
    json: Record<string, any>
  ): T {
    return plainToClass(cls, json);
  }

  static async createFromJSON<T extends BaseClass>(
    cls: new () => T,
    json: Record<string, any>
  ): Promise<T> {
    const instance = this.fromJSON(cls, json);
    const errors = await instance.validate();
    if (errors.length > 0) {
      throw errors;
    }
    return instance;
  }

  static getSchema(options?: Partial<TJSArgs>): any {
    return createSchema(this, options);
  }
}
