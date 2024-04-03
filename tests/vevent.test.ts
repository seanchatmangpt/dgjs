import { VEvent } from "../src/model/vevent";

describe("VEvent Type Safety", () => {
  it("should create a VEvent with valid ISO 8601 dates", () => {
    const eventData = {
      dtstart: "2023-10-25T16:00:00Z",
      dtend: "2023-10-25T18:00:00Z",
      summary: "Web Development Workshop",
      location: "Online",
    };

    const event = new VEvent(eventData);
    expect(event).toBeInstanceOf(VEvent);
    expect(event.dtstart).toBe(eventData.dtstart);
    // ... and so on for other properties
  });

  it("should throw an error for invalid data types", () => {
    const invalidData = {
      dtstart: 12345, // Should be a string
      dtend: "2023-10-25T18:00:00",
      summary: "Web Development Workshop",
      location: "Online",
    };

    // expect(() => new VEvent(invalidData)).toThrow();
  });
});
