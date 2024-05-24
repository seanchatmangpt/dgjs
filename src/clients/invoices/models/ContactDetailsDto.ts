/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalEmailsDto } from './AdditionalEmailsDto';
import type { AddressDto } from './AddressDto';
export type ContactDetailsDto = {
  /**
   * Contact ID
   */
  id: string;
  /**
   * Contact Name
   */
  name: string;
  /**
   * Contact Phone Number
   */
  phoneNo?: string;
  /**
   * Contact Email
   */
  email?: string;
  /**
   * Secondary email addresses for the contact to be saved
   */
  additionalEmails?: Array<AdditionalEmailsDto>;
  /**
   * Contact Company Name
   */
  companyName?: string;
  address?: AddressDto;
  /**
   * Custom Values
   */
  customFields?: Array<string>;
};

