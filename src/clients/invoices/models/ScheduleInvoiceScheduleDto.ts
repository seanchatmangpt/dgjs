/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutoPaymentDetailsDto } from './AutoPaymentDetailsDto';
export type ScheduleInvoiceScheduleDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: ScheduleInvoiceScheduleDto.altType;
  liveMode: boolean;
  /**
   * auto-payment configuration
   */
  autoPayment?: AutoPaymentDetailsDto;
};
export namespace ScheduleInvoiceScheduleDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
}

