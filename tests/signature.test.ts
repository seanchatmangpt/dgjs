import { beforeEach, afterEach, describe, it, expect, vi } from "vitest";
import {
  InputField,
  OutputField,
  SignatureDocumentation,
} from "../src/signature";
import "reflect-metadata"; // Ensure Reflect.metadata API is available

// Before each tests, replace console.log with a mock function
beforeEach(() => {
  vi.spyOn(console, "log").mockImplementation(() => {});
});

// After each tests, restore the original console.log function
afterEach(() => {
  vi.restoreAllMocks();
});

describe("Decorator Tests", () => {
  it("SignatureDocumentation attaches documentation", () => {
    const testDoc = "Test Documentation";
    @SignatureDocumentation(testDoc)
    class TestClass {}

    const doc = Reflect.getMetadata("signatureDocumentation", TestClass);
    expect(doc).toBe(testDoc);
  });

  it("InputField and OutputField attach descriptions and prefixes", () => {
    class TestClass {
      @InputField("Test input description", "inputPrefix")
      inputProp!: string;

      @OutputField("Test output description", "outputPrefix")
      outputProp!: string;
    }

    const inputMetadata = Reflect.getMetadata(
      "inputField",
      TestClass.prototype,
      "inputProp",
    );
    const outputMetadata = Reflect.getMetadata(
      "outputField",
      TestClass.prototype,
      "outputProp",
    );
    expect(inputMetadata.desc).toBe("Test input description");
    expect(outputMetadata.desc).toBe("Test output description");
    expect(inputMetadata.prefix).toBe("inputPrefix");
    expect(outputMetadata.prefix).toBe("outputPrefix");
  });

  it("InputField and OutputField attach descriptions", () => {
    class TestClass {
      @InputField("Test input description")
      inputProp!: string;

      @OutputField("Test output description")
      outputProp!: string;
    }

    const inputDesc = Reflect.getMetadata(
      "inputField",
      TestClass.prototype,
      "inputProp",
    ).desc;
    const outputDesc = Reflect.getMetadata(
      "outputField",
      TestClass.prototype,
      "outputProp",
    ).desc;
    expect(inputDesc).toBe("Test input description");
    expect(outputDesc).toBe("Test output description");
  });
});

describe("Signature decorators and SignatureBase class", () => {
  // Define a tests class using decorators for testing
  @SignatureDocumentation(`[Test] This is a test class for verifying decorator functionality.[/Test]`)
  class TestSignature {
    @InputField("Test input description.", "InputPrefix:")
    testInput: string = "";

    @OutputField("Test output description.", "OutputPrefix:")
    testOutput: string = "";

    constructor() {}
  }

  it("SignatureDocumentation should attach documentation metadata to the class", () => {
    const documentation = Reflect.getMetadata(
      "signatureDocumentation",
      TestSignature,
    );
    expect(documentation.trim()).toContain("[Test] This is a test class for verifying decorator functionality.[/Test]");
  });

  it("InputField and OutputField decorators should attach metadata correctly", () => {
    const inputMetadata = Reflect.getMetadata(
      "inputField",
      TestSignature.prototype,
      "testInput",
    );
    const outputMetadata = Reflect.getMetadata(
      "outputField",
      TestSignature.prototype,
      "testOutput",
    );

    expect(inputMetadata).toEqual({
      desc: "Test input description.",
      prefix: "InputPrefix:",
    });
    expect(outputMetadata).toEqual({
      desc: "Test output description.",
      prefix: "OutputPrefix:",
    });
  });
});
