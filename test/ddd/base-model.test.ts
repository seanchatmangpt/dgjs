import { describe, it, expect } from "vitest";
import { User } from "../../src/model/user";

describe("BaseModel", () => {
  it("should create an instance from a string representation (happy path)", () => {
    const userString = '{"id": "123", "name": "John Doe"}';
    const user = User.fromString(userString);
    expect(user).toBeInstanceOf(User);
    expect(user.id).toBe("123");
    expect(user.name).toBe("John Doe");
  });

  it("should throw an error when creating an instance from an invalid string representation", () => {
    const invalidUserString = '{"id": "123"}';
    expect(() => User.fromString(invalidUserString)).toThrowError(
      'Invalid User data: instance requires property "name"',
    );
  });

  it("should convert the model schema to a string representation", () => {
    const userSchemaString = User.toStringSchema();
    expect(typeof userSchemaString).toBe("string");
    expect(userSchemaString).toContain(
      '"$schema": "http://json-schema.org/draft-07/schema#"',
    );
    expect(userSchemaString).toContain('"title": "User"');
    expect(userSchemaString).toContain('"type": "object"');
    expect(userSchemaString).toContain('"properties":');
    expect(userSchemaString).toContain('"id":');
    expect(userSchemaString).toContain('"name":');
  });

  it("should validate a valid model instance", () => {
    const user = User.fromObject({ id: "123", name: "John Doe" });
    expect(() => user.validate()).not.toThrowError();
  });

  it("should throw an error when validating an invalid model instance", () => {
    expect(() => User.fromObject({ id: "123" })).toThrowError(
      'Invalid User data: instance requires property "name"',
    );
  });
});
