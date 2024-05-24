/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CancelInvoiceScheduleDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: CancelInvoiceScheduleDto.altType;
};
export namespace CancelInvoiceScheduleDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
}

