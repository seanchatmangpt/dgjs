/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductMediaDto } from './ProductMediaDto';
import type { ProductVariantDto } from './ProductVariantDto';
export type UpdateProductDto = {
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The unique identifier for the location.
   */
  locationId: string;
  /**
   * A brief description of the product.
   */
  description?: string;
  productType: UpdateProductDto.productType;
  /**
   * The URL for the product image.
   */
  image?: string;
  /**
   * The statement descriptor for the product.
   */
  statementDescriptor?: string;
  /**
   * Indicates whether the product is available in-store.
   */
  availableInStore?: boolean;
  /**
   * An array of medias for the product.
   */
  medias?: Array<ProductMediaDto>;
  /**
   * An array of variants for the product.
   */
  variants?: Array<ProductVariantDto>;
};
export namespace UpdateProductDto {
  export enum productType {
    DIGITAL = 'DIGITAL',
    PHYSICAL = 'PHYSICAL',
    SERVICE = 'SERVICE',
  }
}

