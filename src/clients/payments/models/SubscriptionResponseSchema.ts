/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SubscriptionResponseSchema = {
  /**
   * The unique identifier for the subscription.
   */
  _id: string;
  /**
   * AltId is the unique identifier eg: location id.
   */
  altId: string;
  /**
   * AltType is the type of identifier.
   */
  altType: SubscriptionResponseSchema.altType;
  /**
   * Contact id corresponding to the subscription.
   */
  contactId?: string;
  /**
   * Contact name corresponding to the subscription.
   */
  contactName?: string;
  /**
   * Contact email corresponding to the subscription.
   */
  contactEmail?: string;
  /**
   * Currency in which subscription occurred.
   */
  currency?: string;
  /**
   * Subscription value.
   */
  amount?: number;
  /**
   * The status of the subscription (e.g., succeeded).
   */
  status: Record<string, any>;
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
   * Entity source type of subscription (eg: funnel).
   */
  entitySourceType: string;
  /**
   * Entity source name for the subscription.
   */
  entitySourceName?: string;
  /**
   * Entity source id for the subscription.
   */
  entitySourceId?: string;
  /**
   * Meta content for the entity source of subscription.
   */
  entitySourceMeta?: Record<string, any>;
  /**
   * Subscription id for subscription.
   */
  subscriptionId?: string;
  /**
   * Snapshot of subscription.
   */
  subscriptionSnapshot?: Record<string, any>;
  /**
   * Payment provider for subscription.
   */
  paymentProviderType?: string;
  /**
   * Payment provider connected account id for subscription.
   */
  paymentProviderConnectedAccount?: string;
  /**
   * Ip address from where subscription was initiated.
   */
  ipAddress?: string;
  /**
   * The creation timestamp of the subscription.
   */
  createdAt: string;
  /**
   * The update timestamp of the subscription.
   */
  updatedAt: string;
};
export namespace SubscriptionResponseSchema {
  /**
   * AltType is the type of identifier.
   */
  export enum altType {
    LOCATION = 'location',
  }
}

