class InvalidJSONError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidJSONError";
  }
}

interface JsonifyResult {
  json: unknown; // Using unknown as it's safer than any and more correct than object
  didTransform: boolean;
}

const jsonify = (almostJson: string): JsonifyResult => {
  try {
    return { json: JSON.parse(almostJson), didTransform: false };
  } catch (e) {
    if (!(e instanceof Error)) {
      throw new Error("Unexpected error type");
    }

    let transformed = almostJson
      .replace(/([a-zA-Z0-9_$]+\s*):/g, (_, p1) => `"${p1}":`) // Using template literals for clarity
      .replace(/'([^']+?)'([\s,\]\}])/g, (_, p1, p2) => `"${p1}"${p2}`);

    try {
      JSON.parse(transformed);
    } catch (transformationError) {
      if (!(transformationError instanceof Error)) {
        throw new Error("Unexpected error type during transformation");
      }
      throw new InvalidJSONError("Failed to parse after transformation");
    }

    return { json: JSON.parse(transformed), didTransform: true };
  }
};

type BracketPair = "[" | "{" | "]" | "}"; // Type for opening/closing brackets

const bracketPairs: Record<BracketPair, BracketPair> = {
  "[": "]",
  "{": "}",
  "]": "[", // These are technically unnecessary for this function, but added for completeness
  "}": "{", // Same as above
};

const anyMatch = <T>(
  iteree: T[],
  iterator: (item: T, index: number, array: T[]) => boolean
): boolean => {
  for (let i = 0; i < iteree.length; i++) {
    if (iterator(iteree[i]!, i, iteree)) {
      return true;
    }
  }
  return false;
};

const extract = (str: string): object | null => {
  let startIndex = str.search(/[\{\[]/);
  if (startIndex === -1) {
    return null;
  }

  const openingChar = str[startIndex] as BracketPair;
  if (!(openingChar in bracketPairs)) {
    throw new Error("Invalid opening character");
  }

  let closingChar = bracketPairs[openingChar];
  let endIndex = -1;
  let count = 0;

  str = str.substring(startIndex);
  anyMatch(str.split(""), (letter, i) => {
    if (letter === openingChar) {
      count++;
    } else if (letter === closingChar) {
      count--;
    }

    if (!count) {
      endIndex = i;
      return true;
    }
    return false;
  });

  if (endIndex === -1) {
    return null;
  }

  return JSON.parse(str.substring(0, endIndex + 1));
};

export { InvalidJSONError, jsonify, extract };
