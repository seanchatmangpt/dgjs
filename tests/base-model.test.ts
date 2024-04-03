import { BaseModel, Field } from "../src/base-model";

class User extends BaseModel<any> {
  name = new Field("");
  age = new Field(0);
  optionalInfo = new Field(null);
}

describe("BaseModel", () => {
  // Constructor Tests
  describe("constructor", () => {
    it("should use default values for missing fields", () => {
      const user = new User({ name: "Alice" }); // 'age' field is missing
      expect(user.name).toBe("Alice");
      expect(user.age).toBe(0);
    });

    it("should handle undefined input gracefully", () => {
      const user = new User(undefined);
      expect(user.name).toBe("");
      expect(user.age).toBe(0);
    });

    // ... more constructor tests
  });

  // modelDump Tests
  describe("modelDump", () => {
    it("should include fields with aliases", () => {
      class Account extends BaseModel<any> {
        email = new Field("", { alias: "user_email" });
      }

      const account = new Account({ email: "test@example.com" });
      expect(account.modelDump({ byAlias: true })).toEqual({
        user_email: "test@example.com",
      });
    });

    // ... more modelDump tests
  });

  // Static Loading Method Tests
  describe("modelLoadJson", () => {
    it("should load a model instance from valid JSON", () => {
      const userJson = '{"name": "Bob", "age": 35}';
      const user = User.modelLoadJson(userJson);
      expect(user).toBeInstanceOf(User);
      expect(user.name).toBe("Bob");
      expect(user.age).toBe(35);
    });

    // ... more loading method tests
  });
});
