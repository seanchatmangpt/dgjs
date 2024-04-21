import { describe, it, expect, beforeEach, afterEach } from "vitest";
import * as fs from "fs";
import * as path from "path";
import { BaseMessageRepository } from "../../src/ddd/base-message-repository";
import { BaseMessage } from "../../src";

describe("BaseMessageRepository", () => {
  const storageFile = path.join(__dirname, "tests-messages.json");
  let repository: BaseMessageRepository;

  beforeEach(() => {
    repository = new BaseMessageRepository(storageFile);
  });

  afterEach(() => {
    if (fs.existsSync(storageFile)) {
      fs.unlinkSync(storageFile);
    }
  });

  it("should add a message to the repository", () => {
    const message = new BaseMessage({
      topic: "orders",
      content: JSON.stringify({ orderId: "123", amount: 100 }),
      attributes: { messageType: "OrderPlaced" },
    });
    repository.add(message);
    expect(repository.listAll()).toHaveLength(1);
    expect(repository.listAll()[0]).toEqual(message);
  });

  it("should retrieve messages by topic", () => {
    const message1 = new BaseMessage({
      topic: "orders",
      content: JSON.stringify({ orderId: "123", amount: 100 }),
      attributes: { messageType: "OrderPlaced" },
    });
    const message2 = new BaseMessage({
      topic: "payments",
      content: JSON.stringify({ paymentId: "456", amount: 50 }),
      attributes: { messageType: "PaymentProcessed" },
    });
    repository.add(message1);
    repository.add(message2);
    const orderMessages = repository.getByTopic("orders");
    expect(orderMessages).toHaveLength(1);
    expect(orderMessages[0]).toEqual(message1);
  });

  it("should retrieve messages by message type", () => {
    const message1 = new BaseMessage({
      topic: "orders",
      content: JSON.stringify({ orderId: "123", amount: 100 }),
      attributes: { messageType: "OrderPlaced" },
    });
    const message2 = new BaseMessage({
      topic: "orders",
      content: JSON.stringify({ orderId: "789", amount: 200 }),
      attributes: { messageType: "OrderPlaced" },
    });
    const message3 = new BaseMessage({
      topic: "payments",
      content: JSON.stringify({ paymentId: "456", amount: 50 }),
      attributes: { messageType: "PaymentProcessed" },
    });
    repository.add(message1);
    repository.add(message2);
    repository.add(message3);
    const orderPlacedMessages = repository.getByMessageType("OrderPlaced");
    expect(orderPlacedMessages).toHaveLength(2);
    expect(orderPlacedMessages).toContainEqual(message1);
    expect(orderPlacedMessages).toContainEqual(message2);
  });

  it("should update a message in the repository", () => {
    const message = new BaseMessage({
      topic: "orders",
      content: JSON.stringify({ orderId: "123", amount: 100 }),
      attributes: { messageType: "OrderPlaced" },
    });
    repository.add(message);
    const updatedMessage = new BaseMessage({
      id: message.id,
      topic: "orders",
      content: JSON.stringify({ orderId: "123", amount: 150 }),
      attributes: { messageType: "OrderUpdated" },
    });
    repository.update(updatedMessage);
    expect(repository.listAll()).toHaveLength(1);
    expect(repository.listAll()[0]).toEqual(updatedMessage);
  });

  it("should remove a message from the repository", () => {
    const message1 = new BaseMessage({
      topic: "orders",
      content: JSON.stringify({ orderId: "123", amount: 100 }),
      attributes: { messageType: "OrderPlaced" },
    });
    const message2 = new BaseMessage({
      topic: "payments",
      content: JSON.stringify({ paymentId: "456", amount: 50 }),
      attributes: { messageType: "PaymentProcessed" },
    });
    repository.add(message1);
    repository.add(message2);
    const removed = repository.remove({ id: message1.id });
    expect(removed).toBe(true);
    expect(repository.listAll()).toHaveLength(1);
    expect(repository.listAll()[0]).toEqual(message2);
  });
});
