/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MembershipOfferDto } from './MembershipOfferDto';
import type { RecurringDto } from './RecurringDto';
export type CreatePriceResponseDto = {
  /**
   * The unique identifier for the price.
   */
  _id: string;
  /**
   * An array of membership offers associated with the price.
   */
  membershipOffers?: Array<MembershipOfferDto>;
  /**
   * An array of variant option IDs associated with the price.
   */
  variantOptionIds?: Array<string>;
  /**
   * The unique identifier for the location.
   */
  locationId?: string;
  /**
   * The unique identifier for the associated product.
   */
  product?: string;
  /**
   * The unique identifier for the user.
   */
  userId?: string;
  /**
   * The name of the price.
   */
  name: string;
  /**
   * The type of the price (e.g., one_time).
   */
  type: CreatePriceResponseDto.type;
  /**
   * The currency code for the price.
   */
  currency: string;
  /**
   * The amount of the price.
   */
  amount: number;
  /**
   * The recurring details of the price (if type is recurring).
   */
  recurring?: RecurringDto;
  /**
   * The creation timestamp of the price.
   */
  createdAt?: string;
  /**
   * The last update timestamp of the price.
   */
  updatedAt?: string;
  /**
   * The compare-at price for comparison purposes.
   */
  compareAtPrice?: number;
  /**
   * Indicates whether inventory tracking is enabled.
   */
  trackInventory?: boolean;
  /**
   * Available inventory stock quantity
   */
  availableQuantity?: number;
  /**
   * Continue selling when out of stock
   */
  allowOutOfStockPurchases?: boolean;
};
export namespace CreatePriceResponseDto {
  /**
   * The type of the price (e.g., one_time).
   */
  export enum type {
    ONE_TIME = 'one_time',
    RECURRING = 'recurring',
  }
}

