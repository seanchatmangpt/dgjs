/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessDetailsDto } from './BusinessDetailsDto';
import type { ContactDetailsDto } from './ContactDetailsDto';
import type { DefaultInvoiceResponseDto } from './DefaultInvoiceResponseDto';
import type { DiscountDto } from './DiscountDto';
import type { ScheduleOptionsDto } from './ScheduleOptionsDto';
export type AutoPaymentInvoiceScheduleResponseDto = {
  /**
   * Schedule Id
   */
  _id: string;
  /**
   * Schedule Status
   */
  status: Record<string, any>;
  /**
   * Live Mode
   */
  liveMode: boolean;
  /**
   * Location Id or Agency Id
   */
  altId: string;
  altType: AutoPaymentInvoiceScheduleResponseDto.altType;
  /**
   * Name of the invoice
   */
  name: string;
  schedule?: ScheduleOptionsDto;
  /**
   * List of invoices
   */
  invoices: Array<DefaultInvoiceResponseDto>;
  /**
   * Business Details
   */
  businessDetails: BusinessDetailsDto;
  /**
   * Currency
   */
  currency: string;
  /**
   * Contact Details
   */
  contactDetails: ContactDetailsDto;
  /**
   * Discount
   */
  discount?: DiscountDto;
  /**
   * Invoice Items
   */
  items: Array<string>;
  /**
   * Total Amount
   */
  total: number;
  /**
   * Title
   */
  title: string;
  /**
   * Terms notes
   */
  termsNotes: string;
  /**
   * Compiled terms notes
   */
  compiledTermsNotes: string;
  /**
   * created at
   */
  createdAt: string;
  /**
   * updated at
   */
  updatedAt: string;
};
export namespace AutoPaymentInvoiceScheduleResponseDto {
  export enum altType {
    LOCATION = 'location',
  }
}

