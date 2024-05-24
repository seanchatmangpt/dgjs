/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductVariantOptionDto } from './ProductVariantOptionDto';
export type ProductVariantDto = {
  /**
   * A unique identifier for the variant.
   */
  id: string;
  /**
   * The name of the variant.
   */
  name: string;
  /**
   * An array of options for the variant.
   */
  options: Array<ProductVariantOptionDto>;
};

