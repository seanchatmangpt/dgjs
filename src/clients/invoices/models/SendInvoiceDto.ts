/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvoiceSettingsSenderConfigurationDto } from './InvoiceSettingsSenderConfigurationDto';
export type SendInvoiceDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: SendInvoiceDto.altType;
  /**
   * Please ensure that the UserId corresponds to an authorized personnel, either by an employee ID or agency ID, to access this location. This account will serve as the primary channel for all future communications and updates.
   */
  userId: string;
  action: SendInvoiceDto.action;
  liveMode: boolean;
  /**
   * sender details for invoice, valid only if invoice is not sent manually
   */
  sentFrom?: InvoiceSettingsSenderConfigurationDto;
};
export namespace SendInvoiceDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
  export enum action {
    SMS_AND_EMAIL = 'sms_and_email',
    SEND_MANUALLY = 'send_manually',
    EMAIL = 'email',
    SMS = 'sms',
  }
}

