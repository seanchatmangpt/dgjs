import { Validator } from "jsonschema";
import { extract } from "../utils/json-tools";

class VJournal {
  summary: string;
  uid: string;
  dtstart: string;
  description?: string;

  constructor(data: {
    summary: string;
    uid: string;
    dtstart: string;
    description?: string;
  }) {
    this.summary = data.summary;
    this.uid = data.uid;
    this.dtstart = data.dtstart;
    this.description = data.description;

    const validator = new Validator();
    const validationResult = validator.validate(this, VJournal.schema);
    if (!validationResult.valid) {
      throw new Error(
        "Invalid VJournal data: " + validationResult.errors.join(", ")
      );
    }
  }

  static toStringSchema() {
    return JSON.stringify(VJournal.schema, null, 0);
  }

  static fromString(data: string) {
    const value: VJournal = extract(data) as unknown as VJournal;
    return new VJournal(value);
  }

  static schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "RFC 5545 VJournal",
    type: "object",
    properties: {
      summary: {
        type: "string",
        description: "A brief summary or title for the journal entry",
      },
      uid: {
        type: "string",
        description: "A unique identifier for the journal entry",
      },
      dtstart: {
        type: "string",
        description: "The ISO 8601 date and time for the journal entry",
      },
      description: {
        type: "string",
        description: "A more detailed description of the journal entry",
        optional: true,
      },
    },
    required: ["summary", "uid", "dtstart"],
    additionalProperties: false,
  };
}

export { VJournal };
