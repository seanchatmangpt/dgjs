// Assuming your functions are exported from a file named 'jsonTools.ts'

import { extract, InvalidJSONError, jsonify } from "../../src/utils/json-tools";

describe("jsonify", () => {
  test("parses valid JSON without transformation", () => {
    const input = '{"key": "value"}';
    const result = jsonify(input);
    expect(result).toEqual({ json: { key: "value" }, didTransform: false });
  });

  test("transforms and parses almost JSON with unquoted keys", () => {
    const input = "{key: 'value'}";
    const result = jsonify(input);
    expect(result).toEqual({ json: { key: "value" }, didTransform: true });
  });

  test("throws InvalidJSONError on invalid JSON", () => {
    const input = "{key: 'value}";
    expect(() => jsonify(input)).toThrow(InvalidJSONError);
  });
});

describe("extract", () => {
  test("extracts object from a string", () => {
    const input = 'Some text { "key": "value" } some other text';
    const result = extract(input);
    expect(result).toStrictEqual({ key: "value" });
  });

  test("extracts array from a string", () => {
    const input = "Before text [1,2,3] after text";
    const result = extract(input);
    expect(result).toStrictEqual([1, 2, 3]);
  });

  test("returns null for strings without objects or arrays", () => {
    const input = "No objects or arrays here!";
    const result = extract(input);
    expect(result).toBeNull();
  });

  test("handles nested structures correctly", () => {
    const input = 'Text { "nested": { "key": "value" }} more text';
    const result = extract(input);
    expect(result).toStrictEqual({ nested: { key: "value" } });
  });

  test("handles multiple nested structures correctly", () => {
    const input =
      'Text { "nested1": { "key": "value" }} more text { "nested2": { "key": "value" }}';
    const result = extract(input);
    expect(result).toStrictEqual({ nested1: { key: "value" } });
  });
});
