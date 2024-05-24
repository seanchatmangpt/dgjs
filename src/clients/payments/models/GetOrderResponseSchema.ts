/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmountSummary } from './AmountSummary';
import type { OrderSource } from './OrderSource';
export type GetOrderResponseSchema = {
  /**
   * The unique identifier for the order.
   */
  _id: string;
  /**
   * AltId is the unique identifier eg: location id.
   */
  altId: string;
  /**
   * AltType is the type of identifier.
   */
  altType: string;
  /**
   * Contact id corresponding to the order.
   */
  contactId?: string;
  /**
   * Currency in which order was created.
   */
  currency?: string;
  /**
   * Order value.
   */
  amount?: number;
  /**
   * The status of the order (e.g., completed).
   */
  status: string;
  /**
   * Order is in live / test mode.
   */
  liveMode?: boolean;
  /**
   * The creation timestamp of the order.
   */
  createdAt: string;
  /**
   * The last update timestamp of the order.
   */
  updatedAt: string;
  /**
   * Fulfillment status of the order.
   */
  fulfillmentStatus?: string;
  /**
   * Contact details of the order.
   */
  contactSnapshot?: Record<string, any>;
  /**
   * Amount details of the order.
   */
  amountSummary?: AmountSummary;
  /**
   * Source details of the order.
   */
  source?: OrderSource;
  /**
   * Item details of the order.
   */
  items?: Array<string>;
  /**
   * Coupon details of the order.
   */
  coupon?: Record<string, any>;
  /**
   * Tracking id of the order.
   */
  trackingId?: string;
  /**
   * Fingerprint id of the order.
   */
  fingerprint?: string;
  /**
   * Meta details of the order.
   */
  meta?: Record<string, any>;
  /**
   * Is test order.
   */
  markAsTest?: boolean;
  /**
   * Trace id of the order.
   */
  traceId?: string;
};

