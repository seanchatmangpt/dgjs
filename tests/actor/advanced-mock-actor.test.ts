import { vi } from "vitest";
import { BaseActor, BaseMessage } from "../../src";
import { createMockActor } from "../setup";

// Usage example
class TestActor extends BaseActor {
  handleTestMessage(message: BaseMessage): void {
    console.log(`Actor ${this.actorId} received message: ${message.content}`);
  }

  anotherMethod(): number {
    return 42;
  }
}

describe("TestActor", () => {
  it("should mock handleTestMessage and anotherMethod", async () => {
    const mockActor = createMockActor(TestActor, {
      handleTestMessage: vi.fn((message: BaseMessage) => {
        console.log(`Mocked handleTestMessage: ${message.content}`);
      }),
      anotherMethod: vi.fn(() => 99),
    });

    const testMessage = new BaseMessage({ content: "test" });
    mockActor.handleTestMessage(testMessage);
    const result = mockActor.anotherMethod();

    expect(mockActor.handleTestMessage).toHaveBeenCalledWith(testMessage);
    expect(result).toBe(99);
    expect(mockActor.anotherMethod).toHaveBeenCalled();
  });
});
