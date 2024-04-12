import "reflect-metadata";
import { expect, test } from "vitest";

import { Template } from "../src/template";
import { GenerateJSONFromText } from "../src/sig/generate-json-from-text";
test("should correctly format the prompt for given input", () => {
  // Mock input similar to the example provided in the requirements
  const textInformation = "Hi Jane, I hope you are doing well...";
  const jsonSchema = {
    properties: {
      dtstart: { title: "Dtstart", type: "string" },
      dtend: { title: "Dtend", type: "string" },
      summary: { title: "Summary", type: "string" },
      location: { title: "Location", type: "string" },
      description: { title: "Description", type: "string" },
    },
    required: ["dtstart", "dtend", "summary", "location", "description"],
    title: "VEvent",
    type: "object",
  };

  const signatureInstance = new GenerateJSONFromText();
  const template = new Template(signatureInstance);

  // Example does not include the output, assuming the Template class formats inputs only
  const example = { textInformation, jsonSchema };
  const formattedPrompt = template.format(example);

  expect(formattedPrompt).toBeTruthy();
});

// Additional test for other scenarios and edge cases can be added here
