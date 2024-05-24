/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrderResponseSchema = {
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
   * Contact name corresponding to the order.
   */
  contactName?: string;
  /**
   * Contact email corresponding to the order.
   */
  contactEmail?: string;
  /**
   * Currency in which order was created.
   */
  currency?: string;
  /**
   * Order value.
   */
  amount?: number;
  /**
   * Order sub-total value.
   */
  subtotal?: number;
  /**
   * Discount value on order.
   */
  discount?: number;
  /**
   * The status of the order (e.g., completed).
   */
  status: string;
  /**
   * Order is in live / test mode.
   */
  liveMode?: boolean;
  /**
   * Total products in an order.
   */
  totalProducts?: number;
  /**
   * Source type of order (eg: funnel).
   */
  sourceType: string;
  /**
   * Source name for the order.
   */
  sourceName?: string;
  /**
   * Source id for the order.
   */
  sourceId?: string;
  /**
   * Meta content for the source of order.
   */
  sourceMeta?: Record<string, any>;
  /**
   * Coupon code for the order.
   */
  couponCode?: string;
  /**
   * The creation timestamp of the order.
   */
  createdAt: string;
  /**
   * The last update timestamp of the order.
   */
  updatedAt: string;
  /**
   * Source sub-type for the order.
   */
  sourceSubType?: string;
  /**
   * Fulfillment status of the order.
   */
  fulfillmentStatus?: string;
  /**
   * Total one time products in an order.
   */
  onetimeProducts?: number;
  /**
   * Total recurring time products in an order.
   */
  recurringProducts?: number;
};

