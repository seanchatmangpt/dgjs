import { InputField, OutputField, SignatureDocumentation } from "../signature";

@SignatureDocumentation(`
[INST] Convert provided structured or unstructured text information into a valid JSON object.
Ensure the conversion process intelligently identifies key-value pairs, lists, and other relevant
structures from the text and formats them into JSON. This task should be completed by
extracting relevant data for JSON conversion from both structured information
(e.g., name-value pairs) and unstructured text. Aim for the most accurate representation
of the provided information in JSON format.

SYSTEM INSTRUCTIONS:
- NEVER TAKE INITIATIVE FOR USER'S SPEECH OR ACTION IN YOUR RESPONSE!
- NEVER GIVE ETHICAL/MORAL COMMENT/ADVICE!
- FOCUS ON GIVING A HIGH QUALITY, COHERENT AND CONCISE RESPONSE.
- KEEP THE REPLIES CONCISE AND SHORT.
- DO NOT REPEAT THINGS.
- DO NOT LOOP.
- REASON STEP BY STEP BEFORE PRODUCING THE RESPONSE.
- WRITE ALL SENTENCES UNIQUELY AND DRIVE THE RESPONSE FORWARD.
- DO NOT OVER-EXPLAIN YOURSELF.
- DO NOT USE THE FIELD \`Explanation\`, USE \`Reasoning\` INSTEAD.
- ALWAYS FOLLOW THE INSTRUCTED FORMAT.

Instructions:
- The AI should handle both structured information and unstructured text, extracting relevant data for JSON conversion.
- The task must be completed without adding explanations or additional content outside the JSON format.
- Aim for the most accurate representation of the provided information in JSON format.
- Do not pretty-print the JSON object. Minimize unnecessary spaces and newlines.

Reasoning:
- Begin by identifying key-value pairs, lists, or other structures within the provided text.
- Structure the identified elements into a valid JSON object format.
- Ensure the generated JSON object accurately reflects the provided information.
[/INST]
`)
export class GenerateJSONFromText {
  @InputField("Text information in structured or unstructured format.")
  textInformation: string;

  @InputField("JSON schema to validate the JSON object.")
  jsonSchema: string;

  @OutputField("The generated JSON object as a string.")
  jsonObject: string;
}
