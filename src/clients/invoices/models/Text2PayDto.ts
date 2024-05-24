/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessDetailsDto } from './BusinessDetailsDto';
import type { ContactDetailsDto } from './ContactDetailsDto';
import type { DiscountDto } from './DiscountDto';
import type { InvoiceItemDto } from './InvoiceItemDto';
import type { SentToDto } from './SentToDto';
export type Text2PayDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: Text2PayDto.altType;
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
  /**
   * id of invoice to update. If skipped, a new invoice will be created
   */
  id?: string;
  /**
   * include terms & notes with receipts
   */
  includeTermsNote?: boolean;
  /**
   * create invoice in draft mode or send mode
   */
  action: Text2PayDto.action;
  /**
   * id of user generating invoice
   */
  userId: string;
  discount?: DiscountDto;
};
export namespace Text2PayDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
  /**
   * create invoice in draft mode or send mode
   */
  export enum action {
    DRAFT = 'draft',
    SEND = 'send',
  }
}

