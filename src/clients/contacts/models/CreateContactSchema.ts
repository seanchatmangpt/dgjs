/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldSchema } from './CustomFieldSchema';
import type { DndSettingsSchema } from './DndSettingsSchema';
export type CreateContactSchema = {
  id?: string;
  dateAdded?: string;
  dateUpdated?: string;
  deleted?: boolean;
  tags?: Array<string>;
  type?: string;
  customFields?: Array<CustomFieldSchema>;
  locationId?: string;
  firstName?: string;
  firstNameLowerCase?: string;
  fullNameLowerCase?: string;
  lastName?: string;
  lastNameLowerCase?: string;
  email?: string;
  emailLowerCase?: string;
  bounceEmail?: boolean;
  unsubscribeEmail?: boolean;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  source?: string;
  companyName?: string;
  dateOfBirth?: string;
  birthMonth?: number;
  birthDay?: number;
  lastSessionActivityAt?: string;
  offers?: Array<string>;
  products?: Array<string>;
  businessId?: string;
};

