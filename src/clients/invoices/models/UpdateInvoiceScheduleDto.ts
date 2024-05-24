/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessDetailsDto } from './BusinessDetailsDto';
import type { ContactDetailsDto } from './ContactDetailsDto';
import type { DiscountDto } from './DiscountDto';
import type { InvoiceItemDto } from './InvoiceItemDto';
import type { ScheduleOptionsDto } from './ScheduleOptionsDto';
export type UpdateInvoiceScheduleDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: UpdateInvoiceScheduleDto.altType;
  name: string;
  contactDetails: ContactDetailsDto;
  schedule: ScheduleOptionsDto;
  liveMode: boolean;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: Array<InvoiceItemDto>;
  discount: DiscountDto;
  termsNotes?: string;
  title?: string;
};
export namespace UpdateInvoiceScheduleDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
}

