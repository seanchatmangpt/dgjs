/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessDetailsDto } from './BusinessDetailsDto';
import type { ContactDetailsDto } from './ContactDetailsDto';
import type { DiscountDto } from './DiscountDto';
export type UpdateInvoiceResponseDto = {
  /**
   * Invoice Id
   */
  _id: string;
  /**
   * Invoice Status
   */
  status: UpdateInvoiceResponseDto.status;
  /**
   * Live Mode
   */
  liveMode: boolean;
  /**
   * Amount Paid
   */
  amountPaid: number;
  /**
   * Location Id or Agency Id
   */
  altId: string;
  altType: UpdateInvoiceResponseDto.altType;
  /**
   * Name of the invoice
   */
  name: string;
  /**
   * Business Details
   */
  businessDetails: BusinessDetailsDto;
  /**
   * Invoice Number
   */
  invoiceNumber: number;
  /**
   * Currency
   */
  currency: string;
  /**
   * Contact Details
   */
  contactDetails: ContactDetailsDto;
  /**
   * Issue date in YYYY-MM-DD format
   */
  issueDate: string;
  /**
   * Due date in YYYY-MM-DD format
   */
  dueDate: string;
  /**
   * Discount
   */
  discount?: DiscountDto;
  /**
   * Invoice Items
   */
  invoiceItems: Array<string>;
  /**
   * Total Amount
   */
  total: number;
  /**
   * Title
   */
  title: string;
  /**
   * Total Amount Due
   */
  amountDue: number;
  /**
   * created at
   */
  createdAt: string;
  /**
   * updated at
   */
  updatedAt: string;
};
export namespace UpdateInvoiceResponseDto {
  /**
   * Invoice Status
   */
  export enum status {
    DRAFT = 'draft',
    SENT = 'sent',
    PAYMENT_PROCESSING = 'payment_processing',
    PAID = 'paid',
    VOID = 'void',
    PARTIALLY_PAID = 'partially_paid',
  }
  export enum altType {
    LOCATION = 'location',
  }
}

