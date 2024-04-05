import { Validator } from "jsonschema";
import { extract } from "../utils/json-tools";

class VTodo {
  summary: string;
  uid: string;
  dtstart: string;
  due: string;
  status?: string;

  constructor(data: {
    summary: string;
    uid: string;
    dtstart: string;
    due: string;
    status?: string;
  }) {
    this.summary = data.summary;
    this.uid = data.uid;
    this.dtstart = data.dtstart;
    this.due = data.due;
    this.status = data.status;

    const validator = new Validator();
    const validationResult = validator.validate(this, VTodo.schema);
    if (!validationResult.valid) {
      throw new Error(
        "Invalid VTodo data: " + validationResult.errors.join(", ")
      );
    }
  }

  static toStringSchema() {
    return JSON.stringify(VTodo.schema, null, 0);
  }

  static fromString(data: string) {
    const value: VTodo = extract(data) as unknown as VTodo;
    return new VTodo(value);
  }

  static schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "RFC 5545 VTodo",
    type: "object",
    properties: {
      summary: {
        type: "string",
        description: "A brief summary or title for the todo item",
      },
      uid: {
        type: "string",
        description: "A unique identifier for the todo item",
      },
      dtstart: {
        type: "string",
        description: "The ISO 8601 start date and time for the todo item",
      },
      due: {
        type: "string",
        description: "The ISO 8601 due date and time for the todo item",
      },
      status: {
        type: "string",
        description: "Defines the current status of the todo item",
        optional: true,
      },
    },
    required: ["summary", "uid", "dtstart", "due"],
    additionalProperties: false,
  };
}

export { VTodo };
