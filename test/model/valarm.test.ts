import { GroqLM } from "../../src/groq-lm";
import { Predict } from "../../src/prediction/predict";
import { GenerateJSONFromText } from "../../src/sig/generate-json-from-text";
import { VAlarm } from "../../src/model/valarm";

it("should generate a VAlarm object from text", async () => {
  const lm = new GroqLM(); // Example language model
  const alarmPrompt = "Reminder: Pay bills in 2 days.";
  let signature: GenerateJSONFromText = new GenerateJSONFromText();

  const jsonPredict = new Predict(signature, lm);

  const response = await jsonPredict.forward({
    jsonSchema: VAlarm.toStringSchema(),
    textInformation: alarmPrompt,
  });

  const alarm = VAlarm.fromString(response);

  expect(alarm).toBeTruthy();
  expect(alarm.action).toBeDefined();
  // Additional assertions based on expected alarm properties
});
