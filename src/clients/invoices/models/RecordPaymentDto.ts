/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardDto } from './CardDto';
import type { ChequeDto } from './ChequeDto';
export type RecordPaymentDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: RecordPaymentDto.altType;
  /**
   * manual payment method
   */
  mode: RecordPaymentDto.mode;
  card: CardDto;
  cheque: ChequeDto;
  /**
   * Any note to be recorded with the transaction
   */
  notes: string;
  /**
   * Amount to be paid against the invoice.
   */
  amount?: number;
};
export namespace RecordPaymentDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
  /**
   * manual payment method
   */
  export enum mode {
    CASH = 'cash',
    CARD = 'card',
    CHEQUE = 'cheque',
    BANK_TRANSFER = 'bank_transfer',
    OTHER = 'other',
  }
}

