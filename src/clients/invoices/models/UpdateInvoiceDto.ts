/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessDetailsDto } from './BusinessDetailsDto';
import type { ContactDetailsDto } from './ContactDetailsDto';
import type { DiscountDto } from './DiscountDto';
import type { InvoiceItemDto } from './InvoiceItemDto';
export type UpdateInvoiceDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: UpdateInvoiceDto.altType;
  /**
   * Name to be updated
   */
  name: string;
  /**
   * Title for the invoice
   */
  title?: string;
  /**
   * Currency
   */
  currency: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Business details which need to be updated
   */
  businessDetails?: BusinessDetailsDto;
  /**
   * Invoice Number
   */
  invoiceNumber?: string;
  /**
   * Id of the contact which you need to send the invoice
   */
  contactId?: string;
  contactDetails?: ContactDetailsDto;
  /**
   * Terms notes, Also supports HTML markups
   */
  termsNotes?: string;
  discount?: DiscountDto;
  invoiceItems: Array<InvoiceItemDto>;
  /**
   * Payment mode
   */
  liveMode?: boolean;
  /**
   * Issue date in YYYY-MM-DD format
   */
  issueDate: string;
  /**
   * Due date in YYYY-MM-DD format
   */
  dueDate: string;
};
export namespace UpdateInvoiceDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
}

