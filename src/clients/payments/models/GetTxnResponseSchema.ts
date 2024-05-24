/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderSource } from './OrderSource';
export type GetTxnResponseSchema = {
  /**
   * The unique identifier for the transaction.
   */
  _id: string;
  /**
   * AltType is the type of identifier.
   */
  altType: string;
  /**
   * AltId is the unique identifier eg: location id.
   */
  altId: string;
  /**
   * Contact id corresponding to the transaction.
   */
  contactId?: string;
  /**
   * Contact details of the transaction.
   */
  contactSnapshot?: Record<string, any>;
  /**
   * Currency in which transaction was made.
   */
  currency?: string;
  /**
   * Transaction value.
   */
  amount?: number;
  /**
   * Transaction status.
   */
  status?: Record<string, any>;
  /**
   * Transaction is in live / test mode.
   */
  liveMode?: boolean;
  /**
   * The creation timestamp of the transaction.
   */
  createdAt: string;
  /**
   * The last update timestamp of the transaction.
   */
  updatedAt: string;
  /**
   * Entity type of transaction (eg: order).
   */
  entityType?: string;
  /**
   * Entity id for the transaction. e.g: order id
   */
  entityId?: string;
  /**
   * Entity source details for the transaction.
   */
  entitySource?: OrderSource;
  /**
   * Charge id for transaction.
   */
  chargeId?: string;
  /**
   * Charge snapshot of transaction.
   */
  chargeSnapshot?: Record<string, any>;
  /**
   * Invoice id for the transaction.
   */
  invoiceId?: string;
  /**
   * Subscription id for transaction.
   */
  subscriptionId?: string;
  /**
   * Payment provider details of the transaction.
   */
  paymentProvider?: Record<string, any>;
  /**
   * Ip address from where transaction was initiated.
   */
  ipAddress?: string;
  /**
   * Meta details of the transaction.
   */
  meta?: Record<string, any>;
  /**
   * Is test transaction.
   */
  markAsTest?: boolean;
  /**
   * Is parent transaction.
   */
  isParent?: boolean;
  /**
   * Transaction amount refunded.
   */
  amountRefunded?: number;
  /**
   * Receipt id for transaction.
   */
  receiptId?: string;
  /**
   * Is transaction qbo synced.
   */
  qboSynced?: boolean;
  /**
   * Qbo details of the transaction.
   */
  qboResponse?: Record<string, any>;
  /**
   * Trace id of the transaction.
   */
  traceId?: string;
};

