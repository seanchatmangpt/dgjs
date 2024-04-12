import { Predict } from "../src/prediction/predict";
import { DummyLM } from "../src/dummy-lm";
import { GenerateJSONFromText } from "../src/sig/generate-json-from-text";
import { GroqLM, GroqModels } from "../src/groq-lm";
import { VEvent } from "../src/model/vevent";
import { setTimeout } from "timers/promises";

describe("Predict Class", () => {
  let predict: Predict;
  let dummyLM: DummyLM;
  let signature: GenerateJSONFromText;

  beforeEach(() => {
    signature = new GenerateJSONFromText();
    dummyLM = new DummyLM(["Mocked LM response"]); // Assuming the DummyLM can be initialized with mock responses
    predict = new Predict(signature, dummyLM);
  });

  test("should correctly format the prompt and process LM response", async () => {
    const inputData = {
      textInformation: "Example text",
      jsonSchema: "{}",
    };
    const prediction = await predict.forward(inputData);

    expect(prediction).toBeTruthy();
    expect(prediction).toEqual("Mocked LM response");
  });

  test("should get a JSON object from GroqLM Mixtral", async () => {
    const lm = new GroqLM(GroqModels.mixtral);

    const prompt = `
      Hi Jane, I hope you are doing well. I wanted to remind you about our meeting tomorrow at 10:00 AM.
      Location: 123 Main St, Anytown, USA Description: Discuss project progress and next steps. 
      
      Thanks, John
    `;

    const jsonPredict = new Predict(signature, lm);

    const response = await jsonPredict.forward({
      jsonSchema: VEvent.toStringSchema(),
      textInformation: prompt,
    });

    console.log(response);

    const evt = VEvent.fromString(response);

    expect(evt).toBeTruthy();
  }, 10000);

  test("should get a JSON object from GroqLM LLama2", async () => {
    const lm = new GroqLM(GroqModels.llama2);

    const prompt = `
      Hi Jane, I hope you are doing well. I wanted to remind you about our meeting tomorrow at 10:00 AM.
      Location: 123 Main St, Anytown, USA Description: Discuss project progress and next steps. 
      
      Thanks, John
    `;

    const jsonPredict = new Predict(signature, lm);

    const response = await jsonPredict.forward({
      jsonSchema: VEvent.toStringSchema(),
      textInformation: prompt,
    });

    console.log(response);

    const evt = VEvent.fromString(response);

    expect(evt).toBeTruthy();
  }, 10000);

  test.skip("should get a JSON object from GroqLM Gemma", async () => {
    const lm = new GroqLM(GroqModels.gemma);

    const prompt = `
      Hi Jane, I hope you are doing well. I wanted to remind you about our meeting tomorrow at 10:00 AM.
      Location: 123 Main St, Anytown, USA Description: Discuss project progress and next steps. 
      
      Thanks, John
    `;

    const jsonPredict = new Predict(signature, lm);

    const response = await jsonPredict.forward({
      jsonSchema: VEvent.toStringSchema(),
      textInformation: prompt,
    });

    console.log(response);

    const evt = VEvent.fromString(response);

    expect(evt).toBeTruthy();
  }, 10000);
});
