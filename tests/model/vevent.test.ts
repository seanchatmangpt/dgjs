import { OpenAILM } from "../../src/openai-lm";
import {OllamaLM, OllamaModels} from "../../src/ollama-lm";
import { GenerateJSONFromText } from "../../src/sig/generate-json-from-text";
import { Predict } from "../../src/prediction/predict";
import { VEvent } from "../../src/model/vevent";

it("OpenAI should generate a VEvent object from text", async () => {
  const lm = new OpenAILM(); // Another example language model
  const prompt = `
      Hi Wren, I hope you are doing well. I wanted to remind you about our meeting tomorrow at 10:00 AM.
      Location: 123 Main St, Anytown, USA Description: Discuss project progress and next steps. 
      
      Thanks, Alex
    `;
  let signature: GenerateJSONFromText = new GenerateJSONFromText();

  const jsonPredict = new Predict(signature, lm);

  const response = await jsonPredict.forward({
    jsonSchema: VEvent.toStringSchema(),
    textInformation: prompt,
  });

  console.log(response);

  const event = VEvent.fromString(response);

  expect(event).toBeTruthy();
  expect(event.organizer.name).toContain("Alex");
  expect(event.attendees[0]!.name).toContain("Wren");
});

it("Ollama should generate a VEvent object from text", async () => {
  const lm = new OllamaLM(OllamaModels.phi3_instruct); // Another example language model
  const prompt = `
      Hi Wren, I hope you are doing well. I wanted to remind you about our meeting tomorrow at 10:00 AM.
      Location: 123 Main St, Anytown, USA Description: Discuss project progress and next steps. 
      
      Thanks, Alex
    `;
  let signature: GenerateJSONFromText = new GenerateJSONFromText();

  const jsonPredict = new Predict(signature, lm);

  const response = await jsonPredict.forward({
    jsonSchema: VEvent.toStringSchema(),
    textInformation: prompt,
  });

  console.log(response);

  const event = VEvent.fromString(response);

  expect(event).toBeTruthy();
  expect(event.organizer.name).toContain("Alex");
  expect(event.attendees[0]!.name).toContain("Wren");
});
