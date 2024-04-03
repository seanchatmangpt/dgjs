import { Validator } from "jsonschema";

class VEvent {
  dtstart: string;
  dtend: string;
  summary: string;
  location: string;
  description: string;
  uid: string;
  organizer: { name: string; email: string };
  attendees: { name: string; email: string }[];

  constructor(data: {
    dtstart: string;
    dtend: string;
    summary: string;
    location?: string;
    description?: string;
    uid: string;
    organizer: { name: string; email: string };
    attendees: { name: string; email: string }[];
  }) {
    this.dtstart = data.dtstart;
    this.dtend = data.dtend;
    this.summary = data.summary;
    this.location = data.location || ""; // Default to empty if not provided
    this.description = data.description || "";
    this.uid = data.uid;
    this.organizer = data.organizer;
    this.attendees = data.attendees;

    // Validate against JSON Schema on creation
    const validator = new Validator();
    const validationResult = validator.validate(this, VEvent.schema);
    if (!validationResult.valid) {
      throw new Error(
        "Invalid VEvent data: " + validationResult.errors.join(", ")
      );
    }
  }

  static toStringSchema() {
    return JSON.stringify(VEvent.schema, null, 0);
  }

  static fromString(data: string) {
    return new VEvent(JSON.parse(data));
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
        required: ["name", "email"],
        additionalProperties: false,
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
          additionalProperties: false,
        },
      },
    },
    required: ["summary", "dtstart", "dtend", "uid", "organizer", "attendees"],
    additionalProperties: false,
  };
}

export { VEvent };
