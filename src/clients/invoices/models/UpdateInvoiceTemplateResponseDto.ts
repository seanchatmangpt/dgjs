/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessDetailsDto } from './BusinessDetailsDto';
import type { DiscountDto } from './DiscountDto';
export type UpdateInvoiceTemplateResponseDto = {
  /**
   * Template Id
   */
  _id: string;
  /**
   * Location Id or Agency Id
   */
  altId: string;
  altType: UpdateInvoiceTemplateResponseDto.altType;
  /**
   * Name of the Template
   */
  name: string;
  /**
   * Business Details
   */
  businessDetails: BusinessDetailsDto;
  /**
   * Currency
   */
  currency: string;
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
   * created at
   */
  createdAt: string;
  /**
   * updated at
   */
  updatedAt: string;
};
export namespace UpdateInvoiceTemplateResponseDto {
  export enum altType {
    LOCATION = 'location',
  }
}

