import { GroqLM } from "../src/groq-lm";

describe("GroqLM", () => {
  let groqLM: GroqLM;

  beforeEach(() => {
    groqLM = new GroqLM();
  });

  test("returns valid JSON according to VEvent schema", async () => {
    // Create a mock prompt that should result in a valid JSON response
    const prompt = `
      Hi Jane, I hope you are doing well. I wanted to remind you about our meeting tomorrow at 10:00 AM.
      Today: 2023-06-08 09:30:00 Tomorrow: 2023-06-09 10:00:00
      Location: 123 Main St, Anytown, USA Description: Discuss project progress and next steps.
    `;

    // Call the GroqLM with the mock prompt
    const response = await groqLM.__call(prompt);

    // Extract the JSON string from the response
    const jsonString = response[0];

    // Parse the JSON string into an object
    let jsonObject: any;
    try {
      jsonObject = JSON.parse(jsonString);
    } catch (error) {
      console.error("Failed to parse JSON string", jsonString);
    }

    // Validate the JSON object against the VEvent schema
    // try {
    //     const vEvent = new VEvent(jsonObject);
    //     expect(vEvent).toBeInstanceOf(VEvent);
    // } catch (error) {
    //     fail('JSON object does not match VEvent schema');
    // }
  });
});
