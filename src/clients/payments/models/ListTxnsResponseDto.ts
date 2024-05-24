/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TxnResponseSchema } from './TxnResponseSchema';
export type ListTxnsResponseDto = {
  /**
   * An array of transactions
   */
  data: Array<TxnResponseSchema>;
  /**
   * total transactions count
   */
  totalCount: number;
};

