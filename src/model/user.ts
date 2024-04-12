// Example usage

import { BaseModel } from "../ddd/base-model";

class User extends BaseModel {
  name?: string;

  public getSchema(): object {
    return {
      $schema: "http://json-schema.org/draft-07/schema#",
      title: "User",
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Unique identifier for the user",
        },
        name: {
          type: "string",
          description: "The name of the user",
        },
      },
      required: ["id", "name"],
      additionalProperties: false,
    };
  }
}

export { User };
