import "reflect-metadata";

export type Signature = {
  [key: string]: any;
};

// Decorator for input fields with a description and prefix
export function InputField(
  desc: string,
  prefix: string = ""
): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol): void {
    Reflect.defineMetadata("inputField", { desc, prefix }, target, propertyKey);
  };
}

// Decorator for output fields with a description and prefix
export function OutputField(
  desc: string,
  prefix: string = ""
): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol): void {
    Reflect.defineMetadata(
      "outputField",
      { desc, prefix },
      target,
      propertyKey
    );
  };
}

// Decorator to attach signature documentation to a class
export function SignatureDocumentation(documentation: string): ClassDecorator {
  return function (constructor: Function): void {
    Reflect.defineMetadata(
      "signatureDocumentation",
      documentation,
      constructor
    );
  };
}
