import { IsString, IsNotEmpty, validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export class VEvent {
  @IsString()
  @IsNotEmpty()
  dtstart: string;

  @IsString()
  @IsNotEmpty()
  dtend: string;

  @IsString()
  @IsNotEmpty()
  summary: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  static schema: {
    title: string;
    type: string;
    properties: {
      summary: { title: string; type: string };
      description: { title: string; type: string };
      location: { title: string; type: string };
      dtend: { title: string; type: string };
      dtstart: { title: string; type: string };
    };
    required: string[];
  };

  constructor(
    dtstart: string,
    dtend: string,
    summary: string,
    location: string,
    description: string
  ) {
    this.dtstart = dtstart;
    this.dtend = dtend;
    this.summary = summary;
    this.location = location;
    this.description = description;
  }

  // Method to convert a plain object into an instance of VEvent
  static fromPlain(plainObj: object): VEvent {
    return plainToInstance(VEvent, plainObj);
  }

  // Method to validate the instance
  static async validate(instance: VEvent): Promise<string[]> {
    const errors = await validate(instance);
    if (errors.length > 0) {
      // Flatten the errors to a simple string array for easier handling
      return errors.map((error) => Object.values(error.constraints)).flat();
    } else {
      // No errors
      return [];
    }
  }
}
