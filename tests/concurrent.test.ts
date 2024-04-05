import { describe, it, expect, vi } from "vitest";
import { VEvent } from "../src/model/vevent";
import { GroqLM, GroqModels } from "../src/groq-lm";
import { Predict } from "../src/prediction/predict";
import { GenerateJSONFromText } from "../src/sig/generate-json-from-text";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
}

interface Comment {
  id: number;
  postId: number;
  text: string;
}

const mockUser: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};

const mockPosts: Post[] = [
  { id: 1, title: "Post 1", content: "Content 1" },
  { id: 2, title: "Post 2", content: "Content 2" },
];

const mockComments: Comment[] = [
  { id: 1, postId: 1, text: "Comment 1" },
  { id: 2, postId: 1, text: "Comment 2" },
];

vi.mock("node-fetch", () => ({
  default: vi.fn(),
}));

async function fetchUser(userId: number): Promise<User> {
  // Mock the implementation
  return Promise.resolve(mockUser);
}

async function fetchPosts(userId: number): Promise<Post[]> {
  // Mock the implementation
  return Promise.resolve(mockPosts);
}

async function fetchComments(postId: number): Promise<Comment[]> {
  // Mock the implementation
  return Promise.resolve(mockComments);
}

async function fetchData(
  userId: number,
  postId: number
): Promise<[User, Post[], Comment[]]> {
  const [user, posts, comments]: [User, Post[], Comment[]] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
    fetchComments(postId),
  ]);

  return [user, posts, comments];
}

describe("fetchData", () => {
  it("should fetch user, posts, and comments concurrently", async () => {
    const userId = 1;
    const postId = 1;

    const [user, posts, comments] = await fetchData(userId, postId);

    expect(user).toEqual(mockUser);
    expect(posts).toEqual(mockPosts);
    expect(comments).toEqual(mockComments);
  });
});

const mockVEvent = {
  summary: "Reminder: Meeting tomorrow",
  description: "Discuss project progress and next steps",
  location: "123 Main St, Anytown, USA",
  dtstart: "2023-03-02T10:00:00-05:00",
  dtend: "2023-03-02T11:00:00-05:00",
  uid: "johnDoeMeeting",
  organizer: {
    name: "John Doe",
    email: "johndoe@example.com",
  },
  attendees: [
    {
      name: "Jane Doe",
      email: "janedoe@example.com",
    },
  ],
};

describe("jsonPredict unit", () => {
  it("should return a valid VEvent", async () => {
    const mockResponse = "mocked VEvent string";

    vi.spyOn(VEvent, "toStringSchema").mockReturnValue("mocked schema");
    vi.spyOn(VEvent, "fromString").mockReturnValue(mockVEvent);

    const lm = new GroqLM();
    const jsonPredict = new Predict(new GenerateJSONFromText(), lm);

    const prompt = `
      Hi Jane, I hope you are doing well. I wanted to remind you about our meeting tomorrow at 10:00 AM.
      Location: 123 Main St, Anytown, USA Description: Discuss project progress and next steps. 
      
      Thanks, John
    `;

    vi.spyOn(jsonPredict, "forward").mockResolvedValue(mockResponse);

    const responses: any[] = await Promise.all([
      jsonPredict.forward({
        jsonSchema: VEvent.toStringSchema(),
        textInformation: prompt,
      }),
      jsonPredict.forward({
        jsonSchema: VEvent.toStringSchema(),
        textInformation: prompt,
      }),
      jsonPredict.forward({
        jsonSchema: VEvent.toStringSchema(),
        textInformation: prompt,
      }),
    ]);

    for (const response of responses) {
      const evt = VEvent.fromString(response);

      expect(evt).toBeTruthy();
      expect(evt).toEqual(mockVEvent);
      expect(VEvent.toStringSchema).toHaveBeenCalled();
      expect(VEvent.fromString).toHaveBeenCalledWith(mockResponse);
      expect(jsonPredict.forward).toHaveBeenCalledWith({
        jsonSchema: "mocked schema",
        textInformation: prompt,
      });
    }
  });
});

async function concurrentJSON(jsonPredict: Predict, prompt: string) {
  const responses: any[] = await Promise.all([
    jsonPredict.forward({
      jsonSchema: VEvent.toStringSchema(),
      textInformation: prompt,
    }),
    jsonPredict.forward({
      jsonSchema: VEvent.toStringSchema(),
      textInformation: prompt,
    }),
    jsonPredict.forward({
      jsonSchema: VEvent.toStringSchema(),
      textInformation: prompt,
    }),
  ]);
  return responses;
}

describe("jsonPredict integration", () => {
  it.skip("should return a valid VEvent", async () => {
    const lm = new GroqLM(GroqModels.llama2);
    const jsonPredict = new Predict(new GenerateJSONFromText(), lm);

    const prompt = `
      Hi Jane, I hope you are doing well. I wanted to remind you about our meeting tomorrow at 10:00 AM.
      Location: 123 Main St, Anytown, USA Description: Discuss project progress and next steps. 
      
      Thanks, John
    `;
    const responses = await concurrentJSON(jsonPredict, prompt);

    for (const response of responses) {
      const evt = VEvent.fromString(response);

      console.log(evt);

      expect(evt).toBeTruthy();
    }
  }, 30000);
});
