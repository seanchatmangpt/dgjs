import { Validator } from "jsonschema";
import { extract } from "../utils/json-tools";

class VEvent {
  dtstart!: string;
  dtend!: string;
  summary!: string;
  location!: string;
  description!: string;
  uid!: string;
  organizer!: { name: string; email: string };
  attendees!: { name: string; email: string }[];

  constructor(data: VEvent) {
    Object.assign(this, data);
  }

  static toStringSchema() {
    return JSON.stringify(VEvent.schema, null, 0);
  }

  static fromString(data: string) {
    const value: VEvent = extract(data) as unknown as VEvent;
    // Validate against JSON Schema on creation
    const validator = new Validator();
    const validationResult = validator.validate(value, VEvent.schema);
    if (!validationResult.valid) {
      throw new Error(
        "Invalid VEvent data: " + validationResult.errors.join(", "),
      );
    }
    return new VEvent(value);
  }

  static schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "RFC 5545 VEvent",
    type: "object",
    properties: {
      summary: {
        type: "string",
        description: "A brief summary or title for the event",
      },
      description: {
        type: "string",
        description: "A more detailed description of the event",
      },
      location: {
        type: "string",
        description: "The location where the event will take place",
      },
      dtstart: {
        type: "string",
        description: "The ISO 8601 start date and time of the event",
      },
      dtend: {
        type: "string",
        description: "The ISO 8601 end date and time of the event",
      },
      uid: {
        type: "string",
        description: "A unique identifier for the event",
      },
      organizer: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "The name of the organizer",
          },
          email: {
            type: "string",
            format: "email",
            description: "The email address of the organizer",
          },
        },
      },
      attendees: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The name of the attendee",
            },
            email: {
              type: "string",
              format: "email",
              description: "The email address of the attendee",
            },
          },
          required: ["name", "email"],
        },
      },
    },
    required: ["summary", "dtstart"],
  };
}

export { VEvent };
