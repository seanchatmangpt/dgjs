/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ItemTaxDto = {
  _id: string;
  name: string;
  rate: number;
  calculation: ItemTaxDto.calculation;
  description?: string;
  taxId?: string;
};
export namespace ItemTaxDto {
  export enum calculation {
    EXCLUSIVE = 'exclusive',
  }
}

