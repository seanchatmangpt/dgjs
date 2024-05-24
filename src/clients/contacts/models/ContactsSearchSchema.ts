/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttributionSource } from './AttributionSource';
import type { CustomFieldSchema } from './CustomFieldSchema';
export type ContactsSearchSchema = {
  id?: string;
  locationId?: string;
  email?: string;
  timezone?: string;
  country?: string;
  source?: string;
  dateAdded?: string;
  customFields?: Array<CustomFieldSchema>;
  tags?: Array<string>;
  businessId?: string;
  attributions?: Array<AttributionSource>;
  followers?: Array<string>;
};

