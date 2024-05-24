/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessSchema } from './BusinessSchema';
import type { SettingsSchema } from './SettingsSchema';
import type { SocialSchema } from './SocialSchema';
export type GetLocationByIdSchema = {
  id?: string;
  companyId?: string;
  name?: string;
  domain?: string;
  address?: string;
  city?: string;
  state?: string;
  logoUrl?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  business?: BusinessSchema;
  social?: SocialSchema;
  settings?: SettingsSchema;
  reseller?: Record<string, any>;
};

