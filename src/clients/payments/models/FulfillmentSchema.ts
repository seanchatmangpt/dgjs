/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FulfilledItem } from './FulfilledItem';
import type { FulfillmentTracking } from './FulfillmentTracking';
export type FulfillmentSchema = {
  /**
   * Location Id or Agency Id
   */
  altId: string;
  altType: FulfillmentSchema.altType;
  /**
   * Fulfillment tracking information
   */
  trackings: Array<FulfillmentTracking>;
  /**
   * The unique identifier for the fulfillment item.
   */
  _id: string;
  /**
   * Fulfilled items
   */
  items: Array<FulfilledItem>;
  /**
   * created at
   */
  createdAt: string;
  /**
   * updated at
   */
  updatedAt: string;
};
export namespace FulfillmentSchema {
  export enum altType {
    LOCATION = 'location',
  }
}

