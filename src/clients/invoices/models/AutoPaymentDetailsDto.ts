/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardDto } from './CardDto';
import type { USBankAccountDto } from './USBankAccountDto';
export type AutoPaymentDetailsDto = {
  enable: boolean;
  type?: string;
  paymentMethodId?: string;
  customerId?: string;
  card?: CardDto;
  usBankAccount?: USBankAccountDto;
};

