/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldResponseSchema } from './CustomFieldResponseSchema';
import type { SearchOpportunitiesContactResponseSchema } from './SearchOpportunitiesContactResponseSchema';
export type SearchOpportunitiesResponseSchema = {
  id?: string;
  name?: string;
  monetaryValue?: number;
  pipelineId?: string;
  pipelineStageId?: string;
  assignedTo?: string;
  status?: string;
  source?: string;
  lastStatusChangeAt?: string;
  lastStageChangeAt?: string;
  lastActionDate?: string;
  indexVersion?: string;
  createdAt?: string;
  updatedAt?: string;
  contactId?: string;
  locationId?: string;
  contact?: SearchOpportunitiesContactResponseSchema;
  notes?: Array<string>;
  tasks?: Array<string>;
  calendarEvents?: Array<string>;
  customFields?: Array<CustomFieldResponseSchema>;
  followers?: Array<any[]>;
};

