/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemTaxDto } from './ItemTaxDto';
export type InvoiceItemDto = {
  /**
   * Invoice Item Name
   */
  name: string;
  /**
   * Invoice descriptions
   */
  description?: string;
  /**
   * Product Id
   */
  productId?: string;
  /**
   * Price Id
   */
  priceId?: string;
  /**
   * Currency
   */
  currency: string;
  /**
   * Product amount
   */
  amount: number;
  /**
   * Product Quantity
   */
  qty: number;
  /**
   * Tax
   */
  taxes?: Array<ItemTaxDto>;
};

