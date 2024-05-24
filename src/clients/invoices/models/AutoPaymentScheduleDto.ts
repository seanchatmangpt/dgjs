/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutoPaymentDetailsDto } from './AutoPaymentDetailsDto';
export type AutoPaymentScheduleDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: AutoPaymentScheduleDto.altType;
  id: string;
  /**
   * auto-payment configuration
   */
  autoPayment: AutoPaymentDetailsDto;
};
export namespace AutoPaymentScheduleDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
}

