/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessDetailsDto } from './BusinessDetailsDto';
import type { ContactDetailsDto } from './ContactDetailsDto';
import type { DiscountDto } from './DiscountDto';
import type { TotalSummaryDto } from './TotalSummaryDto';
export type GetInvoiceResponseDto = {
  /**
   * Invoice Id
   */
  _id: string;
  /**
   * Invoice Status
   */
  status: GetInvoiceResponseDto.status;
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
  altType: GetInvoiceResponseDto.altType;
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
  totalSummary: TotalSummaryDto;
};
export namespace GetInvoiceResponseDto {
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

