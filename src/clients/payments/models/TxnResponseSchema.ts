/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TxnResponseSchema = {
  /**
   * The unique identifier for the transaction.
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
   * Contact id corresponding to the transaction.
   */
  contactId?: string;
  /**
   * Contact name corresponding to the transaction.
   */
  contactName?: string;
  /**
   * Contact email corresponding to the transaction.
   */
  contactEmail?: string;
  /**
   * Currency in which transaction occurred.
   */
  currency?: string;
  /**
   * Transaction value.
   */
  amount?: number;
  /**
   * The status of the transaction (e.g., succeeded).
   */
  status: Record<string, any>;
  /**
   * Transaction is in live / test mode.
   */
  liveMode?: boolean;
  /**
   * Entity type of transaction (eg: order).
   */
  entityType?: string;
  /**
   * Entity id for the transaction. e.g: order id
   */
  entityId?: string;
  /**
   * Entity source type of transaction (eg: funnel).
   */
  entitySourceType: string;
  /**
   * Entity source sub-type of the transactions.
   */
  entitySourceSubType?: string;
  /**
   * Entity source name for the transaction.
   */
  entitySourceName?: string;
  /**
   * Entity source id for the transaction.
   */
  entitySourceId?: string;
  /**
   * Meta content for the entity source of transaction.
   */
  entitySourceMeta?: Record<string, any>;
  /**
   * Subscription id for transaction.
   */
  subscriptionId?: string;
  /**
   * Charge id for transaction.
   */
  chargeId?: string;
  /**
   * Charge snapshot of transaction.
   */
  chargeSnapshot?: Record<string, any>;
  /**
   * Payment provider for transaction.
   */
  paymentProviderType?: string;
  /**
   * Payment provider  account id for transaction.
   */
  paymentProviderConnectedAccount?: string;
  /**
   * Ip address from where transaction was initiated.
   */
  ipAddress?: string;
  /**
   * The creation timestamp of the transaction.
   */
  createdAt: string;
  /**
   * The update timestamp of the transaction.
   */
  updatedAt: string;
  /**
   * Transaction amount refunded.
   */
  amountRefunded?: number;
  /**
   * Transaction payment method details.
   */
  paymentMethod?: Record<string, any>;
};

