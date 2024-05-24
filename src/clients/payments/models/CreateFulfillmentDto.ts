/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FulfillmentItems } from './FulfillmentItems';
import type { FulfillmentTracking } from './FulfillmentTracking';
export type CreateFulfillmentDto = {
  /**
   * Location Id or Agency Id
   */
  altId: string;
  altType: CreateFulfillmentDto.altType;
  /**
   * Fulfillment tracking information
   */
  trackings: Array<FulfillmentTracking>;
  /**
   * Fulfilled items
   */
  items: Array<FulfillmentItems>;
  /**
   * Need to send a notification to customer
   */
  notifyCustomer: boolean;
};
export namespace CreateFulfillmentDto {
  export enum altType {
    LOCATION = 'location',
  }
}

