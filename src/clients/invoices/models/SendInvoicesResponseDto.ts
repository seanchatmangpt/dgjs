/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefaultInvoiceResponseDto } from './DefaultInvoiceResponseDto';
export type SendInvoicesResponseDto = {
  invoice: DefaultInvoiceResponseDto;
  smsData: Record<string, any>;
  emailData: Record<string, any>;
};

