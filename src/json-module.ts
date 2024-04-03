// Assume VEvent.schema is a manually defined JSON schema for VEvent
import { VEvent } from "./model/vevent";

VEvent.schema = {
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

import { Predict } from "./Predict";
import { GenerateJSONFromText } from "./GenerateJSONFromText";
import { Template } from "./Template"; // Assume the Template class is implemented as discussed

class JsonModule {
  async forward(text: string): Promise<string> {
    // Initialize GenerateJSONFromText with empty values for constructor parameters
    const signatureInstance = new GenerateJSONFromText(
      "",
      JSON.stringify(VEvent.schema)
    );

    // Create an instance of Template configured with the GenerateJSONFromText signature
    const template = new Template(signatureInstance);

    // Create an instance of Predict configured with the GenerateJSONFromText signature
    const pred = new Predict(GenerateJSONFromText);

    // Prepare the input for prediction
    const predictionInput = {
      textInformation: text,
      jsonSchema: JSON.stringify(VEvent.schema), // Use the JSON schema
    };

    // Perform prediction
    const predictionOutput = await pred.predict(predictionInput);

    // Format the prediction output using the template
    const formattedOutput = template.format({
      ...predictionInput,
      jsonObject: predictionOutput.jsonObject, // Assume jsonObject is the key where the output JSON is stored
    });

    return formattedOutput;
  }
}

export { JsonModule };
