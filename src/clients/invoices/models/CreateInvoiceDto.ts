/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessDetailsDto } from './BusinessDetailsDto';
import type { ContactDetailsDto } from './ContactDetailsDto';
import type { DiscountDto } from './DiscountDto';
import type { InvoiceItemDto } from './InvoiceItemDto';
import type { SentToDto } from './SentToDto';
export type CreateInvoiceDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: CreateInvoiceDto.altType;
  /**
   * Invoice Name
   */
  name: string;
  businessDetails: BusinessDetailsDto;
  /**
   * Currency code
   */
  currency: string;
  /**
   * An array of items for the invoice.
   */
  items: Array<InvoiceItemDto>;
  discount: DiscountDto;
  /**
   * Terms notes, Also supports HTML markups
   */
  termsNotes?: string;
  /**
   * Title for the invoice
   */
  title?: string;
  /**
   * Contact information to send the invoice to
   */
  contactDetails: ContactDetailsDto;
  /**
   * Invoice Number
   */
  invoiceNumber?: string;
  /**
   * Issue date in YYYY-MM-DD format
   */
  issueDate: string;
  /**
   * Due date in YYYY-MM-DD format
   */
  dueDate?: string;
  sentTo: SentToDto;
  liveMode: boolean;
};
export namespace CreateInvoiceDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
}

