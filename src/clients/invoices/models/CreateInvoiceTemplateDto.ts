/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessDetailsDto } from './BusinessDetailsDto';
import type { DiscountDto } from './DiscountDto';
import type { InvoiceItemDto } from './InvoiceItemDto';
export type CreateInvoiceTemplateDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: CreateInvoiceTemplateDto.altType;
  internal?: boolean;
  /**
   * Name of the template
   */
  name: string;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: Array<InvoiceItemDto>;
  discount?: DiscountDto;
  termsNotes?: string;
  /**
   * Template title
   */
  title?: string;
};
export namespace CreateInvoiceTemplateDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
}

