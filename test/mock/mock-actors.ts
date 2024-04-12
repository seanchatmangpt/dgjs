import { vi } from "vitest";
import { BaseActor, BaseMessage } from "../../src";

// Variation 1: Direct Mocking with Vitest
class MockActor extends BaseActor {
  handleMessage = vi.fn();
}

// Variation 2: Subclassing for Customization
class TestLogActor extends BaseActor {
  receivedMessages: BaseMessage[] = [];
}

// ---- Example Usage inside mock-actors.ts ----

// Export your mocks - you might consider a more descriptive naming scheme
export { MockActor, TestLogActor };
