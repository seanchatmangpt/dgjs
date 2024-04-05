# DSPyGen JS

DSPyGen JS is a JavaScript/TypeScript library designed to streamline the development of data processing and generation pipelines, with a special focus on integrating language models and other AI-driven processes. This README provides an overview of the key components and functionalities within the library, tailored specifically to the TypeScript code snippets provided earlier.

## Overview

DSPyGen JS leverages modern TypeScript features to offer developers a robust framework for building and managing complex data processing and generation pipelines. Key functionalities include interfacing with language models, handling events with a custom actor model, and validating data against JSON schemas.

### Key Features

- **GroqLM Integration**: A class for interacting with Groq language models, supporting basic requests and forwarding prompts to the model.
- **Event Handling**: Utilize the Actor model for concurrent operations and message handling within the pipeline.
- **Data Validation**: Classes that validate data objects against predefined JSON schemas, ensuring the integrity of data throughout the pipeline.
- **Utilities**: Helper functions and classes for common tasks, such as extracting JSON from strings and handling custom event data.

## Installation

To use DSPyGen JS in your project, ensure you have Node.js and npm or yarn installed. Then, add DSPyGen JS to your project dependencies using npm or yarn:

```sh
npm install dpgjs
# or
yarn add dpgjs
```

## Usage

### GroqLM Integration

The `GroqLM` class allows for seamless interaction with Groq's language models. It's designed to handle various communication errors gracefully and provides a simple interface for making predictions:

```typescript
import { GroqLM, GroqModels } from "dpgjs";

const model = new GroqLM(GroqModels.llama2);
model.forward(prompt)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### Actor System for Event Handling

DSPyGen JS employs an actor system to manage concurrency and facilitate message passing between different components of your pipeline:

```typescript
import { ActorSystem, BaseActor, BaseMessage } from "dpgjs";

class MyActor extends BaseActor {
  handleMessage(message: BaseMessage) {
    // Handle message
  }
}

const system = new ActorSystem();
const actor = system.actorOf(MyActor);
```

### Data Validation with JSON Schema

Validating data objects against JSON schemas is streamlined with the `VEvent` class, which automatically validates its properties upon creation:

```typescript
import { VEvent } from "dpgjs";

const eventData = {
  // Event data following the VEvent schema
};
const event = new VEvent(eventData);
```

### Extracting JSON from Strings

The utility function `extract` can be used to parse strings and extract JSON objects, simplifying the process of dealing with unstructured data:

```typescript
import { extract } from "dpgjs";

const jsonString = extract('{"key": "value"}');
console.log(jsonString); // Outputs the parsed JSON object
```

## Testing

DSPyGen JS comes with built-in support for unit testing using Vitest, allowing you to ensure the reliability and correctness of your pipeline components:

```typescript
import { describe, it, expect } from "vitest";
import { MyComponent } from "dpgjs";

describe("MyComponent", () => {
  it("should behave correctly", () => {
    const component = new MyComponent();
    expect(component.doSomething()).toBe(true);
  });
});
```

## Conclusion

DSPyGen JS provides a comprehensive set of tools for building data processing and generation pipelines, emphasizing ease of use, flexibility, and reliability. Whether you're working with complex language models or need a robust system for event handling and data validation, DSPyGen JS offers a solid foundation for your projects.