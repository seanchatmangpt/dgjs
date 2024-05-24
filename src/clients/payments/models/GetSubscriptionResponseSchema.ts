/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderSource } from './OrderSource';
import type { ScheduleOptionsDto } from './ScheduleOptionsDto';
export type GetSubscriptionResponseSchema = {
  /**
   * The unique identifier for the subscription.
   */
  _id: string;
  /**
   * AltType is the type of identifier.
   */
  altType: Record<string, any>;
  /**
   * AltId is the unique identifier eg: location id.
   */
  altId: string;
  /**
   * Contact id corresponding to the subscription.
   */
  contactId?: string;
  /**
   * Contact details of the subscriber.
   */
  contactSnapshot?: Record<string, any>;
  /**
   * Coupon details of the subscription.
   */
  coupon?: Record<string, any>;
  /**
   * Currency in which subscription was made.
   */
  currency?: string;
  /**
   * Subscription value.
   */
  amount?: number;
  /**
   * Subscription status.
   */
  status?: Record<string, any>;
  /**
   * Subscription is in live / test mode.
   */
  liveMode?: boolean;
  /**
   * Entity type of subscription (eg: order).
   */
  entityType?: string;
  /**
   * Entity id for the subscription. e.g: order id
   */
  entityId?: string;
  /**
   * Entity source details for the subscription.
   */
  entitySource?: OrderSource;
  /**
   * Subscription id for subscription.
   */
  subscriptionId?: string;
  /**
   * Snapshot of subscription.
   */
  subscriptionSnapshot?: Record<string, any>;
  /**
   * Payment provider details for the subscription.
   */
  paymentProvider?: Record<string, any>;
  /**
   * Ip address from where subscription was initiated.
   */
  ipAddress?: string;
  /**
   * The creation timestamp of the subscription.
   */
  createdAt: string;
  /**
   * The last update timestamp of the subscription.
   */
  updatedAt: string;
  /**
   * Meta details of the subscription.
   */
  meta?: Record<string, any>;
  /**
   * Is test subscription.
   */
  markAsTest?: boolean;
  /**
   * Scedule details for the subscription.
   */
  schedule?: ScheduleOptionsDto;
  /**
   * Auto payment details of the subscription.
   */
  autoPayment?: Record<string, any>;
  /**
   * Recurring product details of the subscription.
   */
  recurringProduct?: Record<string, any>;
  /**
   * Cancellation timestamp of the subscription.
   */
  canceledAt?: string;
  /**
   * User id who cancelled the subscription.
   */
  canceledBy?: string;
  /**
   * Trace id of the subscription.
   */
  traceId?: string;
};

