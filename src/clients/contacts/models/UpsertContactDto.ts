/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFieldsInputArraySchema } from './customFieldsInputArraySchema';
import type { customFieldsInputObjectSchema } from './customFieldsInputObjectSchema';
import type { customFieldsInputStringSchema } from './customFieldsInputStringSchema';
import type { DndSettingsSchema } from './DndSettingsSchema';
import type { InboundDndSettingsSchema } from './InboundDndSettingsSchema';
export type UpsertContactDto = {
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  email?: string | null;
  locationId: string;
  gender?: string;
  phone?: string | null;
  address1?: string | null;
  city?: string | null;
  state?: string | null;
  postalCode?: string;
  website?: string | null;
  timezone?: string | null;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  inboundDndSettings?: InboundDndSettingsSchema;
  /**
   * This field will overwrite all current tags associated with the contact. To update a tags, it is recommended to use the Add Tag or Remove Tag API instead.
   */
  tags?: Array<string>;
  customFields?: Array<(customFieldsInputStringSchema | customFieldsInputArraySchema | customFieldsInputObjectSchema)>;
  source?: string;
  country?: string;
  companyName?: string | null;
};

