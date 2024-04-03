import { Predict } from "../src/predictions/predict";
import { DummyLM } from "../src/dummy-lm";
import { GenerateJSONFromText } from "../src/sig/generate-json-from-text";
import { GroqLM } from "../src/groq-lm";
import { VEvent } from "../src/model/vevent";

describe("Predict Class", () => {
  let predict: Predict;
  let dummyLM: DummyLM;
  let signature: GenerateJSONFromText;

  beforeEach(() => {
    const prompt = `
      Hi Jane, I hope you are doing well. I wanted to remind you about our meeting tomorrow at 10:00 AM.
      Today: 2023-06-08 09:30:00 Tomorrow: 2023-06-09 10:00:00
      Location: 123 Main St, Anytown, USA Description: Discuss project progress and next steps.
    `;

    signature = new GenerateJSONFromText();
    dummyLM = new DummyLM(["Mocked LM response"]); // Assuming the DummyLM can be initialized with mock responses
    predict = new Predict(signature, dummyLM);
  });

  it("should correctly format the prompt and process LM response", async () => {
    const inputData = {
      textInformation: "Example text",
      jsonSchema: "{}",
    };
    const prediction = await predict.forward(inputData);

    expect(prediction).toBeTruthy();
    expect(prediction).toEqual("Mocked LM response");
  });

  it("should get a JSON object from GroqLM", async () => {
    const lm = new GroqLM();

    const prompt = `
      Hi Jane, I hope you are doing well. I wanted to remind you about our meeting tomorrow at 10:00 AM.
      Today: 2023-06-08 09:30:00 Tomorrow: 2023-06-09 10:00:00
      Location: 123 Main St, Anytown, USA Description: Discuss project progress and next steps.
    `;

    const jsonPredict = new Predict(signature, lm);

    const response = await jsonPredict.forward({
      textInformation: prompt,
      jsonSchema:
        " {'properties': {'dtstart': {'title': 'Dtstart', 'type': 'string'}, 'dtend': {'title': 'Dtend', 'type': 'string'}, 'summary': {'title': 'Summary', 'type': 'string'}, 'location': {'title': 'Location', 'type': 'string'}, 'description': {'title': 'Description', 'type': 'string'}}, 'required': ['dtstart', 'dtend', 'summary', 'location', 'description'], 'title': 'VEvent', 'type': 'object'}",
    });

    expect(response).toBeTruthy();
  });
});
