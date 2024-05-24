/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SettingsSchema } from './SettingsSchema';
import type { SocialSchema } from './SocialSchema';
export type GetLocationSchema = {
  /**
   * Location Id
   */
  id?: string;
  /**
   * The name for the sub-account/location
   */
  name?: string;
  /**
   * The phone number of the business for which sub-account is created
   */
  phone?: string;
  /**
   * The email for the sub-account/location
   */
  email?: string;
  /**
   * The address of the business for which sub-account is created
   */
  address?: string;
  /**
   * The city where the business is located for which sub-account is created
   */
  city?: string;
  /**
   * The state in which the business operates for which sub-account is created
   */
  state?: string;
  /**
   * The country in which the business is present for which sub-account is created
   */
  country?: string;
  /**
   * The postal code of the business for which sub-account is created
   */
  postalCode?: string;
  /**
   * The website of the business for which sub-account is created
   */
  website?: string;
  /**
   * The timezone of the business for which sub-account is created
   */
  timezone?: string;
  /**
   * The default settings for location
   */
  settings?: SettingsSchema;
  /**
   * The social media links for location
   */
  social?: SocialSchema;
};

