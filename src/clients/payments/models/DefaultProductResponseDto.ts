/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductMediaDto } from './ProductMediaDto';
import type { ProductVariantDto } from './ProductVariantDto';
export type DefaultProductResponseDto = {
  /**
   * The unique identifier for the product.
   */
  _id: string;
  /**
   * product description
   */
  description?: string;
  /**
   * An array of variants for the product.
   */
  variants?: Array<ProductVariantDto>;
  /**
   * An array of medias for the product.
   */
  medias?: Array<ProductMediaDto>;
  /**
   * The unique identifier for the location.
   */
  locationId: string;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The type of the product (e.g., PHYSICAL).
   */
  productType: string;
  /**
   * Indicates whether the product is available in-store.
   */
  availableInStore?: boolean;
  /**
   * The unique identifier for the user who created the product.
   */
  userId?: string;
  /**
   * The creation timestamp of the product.
   */
  createdAt: string;
  /**
   * The last update timestamp of the product.
   */
  updatedAt: string;
  /**
   * The statement descriptor for the product.
   */
  statementDescriptor?: string;
  /**
   * The URL for the product image.
   */
  image?: string;
  /**
   * An array of category Ids for the product
   */
  collectionIds?: Array<string>;
  /**
   * Is automatic attachment of taxes enabled for the product
   */
  isTaxesEnabled?: boolean;
  /**
   * An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details.
   */
  taxes?: Array<string>;
};

