/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VoidInvoiceDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: VoidInvoiceDto.altType;
};
export namespace VoidInvoiceDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
}

