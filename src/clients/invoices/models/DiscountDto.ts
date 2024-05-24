/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DiscountDto = {
  /**
   * Discount Value
   */
  value?: number;
  /**
   * Discount type
   */
  type: DiscountDto.type;
};
export namespace DiscountDto {
  /**
   * Discount type
   */
  export enum type {
    PERCENTAGE = 'percentage',
    FIXED = 'fixed',
  }
}

