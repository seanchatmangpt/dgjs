import { Validator } from "jsonschema";
import { extract } from "../utils/json-tools";
import { VEvent } from "./vevent";

class VAlarm {
  action!: string;
  trigger!: string;
  description!: string;
  duration?: string;
  repeat?: number;

  constructor(data: {
    action: string;
    trigger: string;
    description: string;
    duration?: string;
    repeat?: number;
  }) {
    Object.assign(this, data);
  }

  static toStringSchema() {
    return JSON.stringify(VAlarm.schema, null, 0);
  }

  static fromString(data: string) {
    const value: VAlarm = extract(data) as unknown as VAlarm;
    const validator = new Validator();
    const validationResult = validator.validate(value, VAlarm.schema);
    if (!validationResult.valid) {
      throw new Error(
        "Invalid VAlarm data: " + validationResult.errors.join(", "),
      );
    }
    return new VAlarm(value);
  }

  static schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "RFC 5545 VAlarm",
    type: "object",
    properties: {
      action: {
        type: "string",
        description: "Action to be invoked when alarm is triggered",
      },
      trigger: {
        type: "string",
        description: "Defines when the alarm will be triggered",
      },
      description: {
        type: "string",
        description: "A more detailed description of the alarm",
      },
      duration: {
        type: "string",
        description: "Specifies a duration for the alarm's active period. ",
        optional: true,
      },
      repeat: {
        type: "number",
        description: "Defines how many times the alarm repeats",
        optional: true,
      },
    },
    // required: ["action", "trigger", "description"],
  };
}

export { VAlarm };
