import { GenerateJSONFromText } from "../../src/sig/generate-json-from-text";
import { GroqLM } from "../../src/groq-lm";
import { Predict } from "../../src/prediction/predict";
import { VJournal } from "../../src/model/vjournal";

it("should generate a VJournal object from text", async () => {
  const lm = new GroqLM(); // Assuming Gemma is another language model
  const journalPrompt =
    "Journal Entry: Reflecting on this year's achievements.";
  let signature: GenerateJSONFromText = new GenerateJSONFromText();

  const jsonPredict = new Predict(signature, lm);

  const response = await jsonPredict.forward({
    jsonSchema: VJournal.toStringSchema(),
    textInformation: journalPrompt,
  });

  const journal = VJournal.fromString(response);

  expect(journal).toBeTruthy();
  expect(journal.summary).toContain("achievements");
  // Additional assertions based on expected journal properties
});
