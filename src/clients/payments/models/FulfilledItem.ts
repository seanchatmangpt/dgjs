/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefaultPriceResponseDto } from './DefaultPriceResponseDto';
import type { DefaultProductResponseDto } from './DefaultProductResponseDto';
export type FulfilledItem = {
  /**
   * The id of product price
   */
  _id: string;
  /**
   * Name
   */
  name: string;
  /**
   * Product details
   */
  product: DefaultProductResponseDto;
  /**
   * Price details
   */
  price: DefaultPriceResponseDto;
  /**
   * The no of quantity of the current fulfilled item
   */
  qty: number;
};

