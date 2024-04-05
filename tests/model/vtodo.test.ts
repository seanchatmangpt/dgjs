import { GroqLM } from "../../src/groq-lm";
import { GenerateJSONFromText } from "../../src/sig/generate-json-from-text";
import { Predict } from "../../src/prediction/predict";
import { VTodo } from "../../src/model/vtodo";

it("should generate a VTodo object from text", async () => {
  const lm = new GroqLM(); // Another example language model
  const todoPrompt = "To-Do: Schedule annual doctor's appointment.";
  let signature: GenerateJSONFromText = new GenerateJSONFromText();

  const jsonPredict = new Predict(signature, lm);

  const response = await jsonPredict.forward({
    jsonSchema: VTodo.toStringSchema(),
    textInformation: todoPrompt,
  });

  const todo = VTodo.fromString(response);

  expect(todo).toBeTruthy();
  expect(todo.summary).toContain("doctor");
});
