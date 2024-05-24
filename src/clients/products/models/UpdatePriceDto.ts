/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MembershipOfferDto } from './MembershipOfferDto';
import type { PriceMetaDto } from './PriceMetaDto';
import type { RecurringDto } from './RecurringDto';
export type UpdatePriceDto = {
  /**
   * The name of the price.
   */
  name: string;
  /**
   * The type of the price.
   */
  type: UpdatePriceDto.type;
  /**
   * The currency of the price.
   */
  currency: string;
  /**
   * The amount of the price. ( min: 0.01 )
   */
  amount: number;
  /**
   * The recurring details of the price (if type is recurring).
   */
  recurring?: RecurringDto;
  /**
   * A brief description of the price.
   */
  description?: string;
  /**
   * An array of membership offers associated with the price.
   */
  membershipOffers?: Array<MembershipOfferDto>;
  /**
   * The trial period duration in days (if applicable).
   */
  trialPeriod?: number;
  /**
   * The total number of billing cycles for the price. ( min: 1 )
   */
  totalCycles?: number;
  /**
   * The setup fee for the price.
   */
  setupFee?: number;
  /**
   * An array of variant option IDs associated with the price.
   */
  variantOptionIds?: Array<string>;
  /**
   * The compare at price for the price.
   */
  compareAtPrice?: number;
  /**
   * The unique identifier of the location associated with the price.
   */
  locationId: string;
  /**
   * The unique identifier of the user who created the price.
   */
  userId?: string;
  /**
   * Additional metadata associated with the price.
   */
  meta?: PriceMetaDto;
  /**
   * Need to track inventory stock quantity
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
export namespace UpdatePriceDto {
  /**
   * The type of the price.
   */
  export enum type {
    ONE_TIME = 'one_time',
    RECURRING = 'recurring',
  }
}

