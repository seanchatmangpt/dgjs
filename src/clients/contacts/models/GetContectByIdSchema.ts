/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttributionSource } from './AttributionSource';
import type { CustomFieldSchema } from './CustomFieldSchema';
import type { DndSettingsSchema } from './DndSettingsSchema';
export type GetContectByIdSchema = {
  id?: string;
  name?: string;
  locationId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  emailLowerCase?: string;
  timezone?: string;
  companyName?: string;
  phone?: string;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  type?: string;
  source?: string;
  assignedTo?: string;
  address1?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  tags?: Array<string>;
  dateOfBirth?: string;
  dateAdded?: string;
  dateUpdated?: string;
  attachments?: string;
  ssn?: string;
  gender?: string;
  keyword?: string;
  firstNameLowerCase?: string;
  fullNameLowerCase?: string;
  lastNameLowerCase?: string;
  lastActivity?: string;
  customFields?: Array<CustomFieldSchema>;
  businessId?: string;
  attributionSource?: AttributionSource;
  lastAttributionSource?: AttributionSource;
};

