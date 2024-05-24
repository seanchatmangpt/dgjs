/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFieldsInputArraySchema } from './customFieldsInputArraySchema';
import type { customFieldsInputObjectSchema } from './customFieldsInputObjectSchema';
import type { customFieldsInputStringSchema } from './customFieldsInputStringSchema';
export type CreateDto = {
  /**
   * pipeline Id
   */
  pipelineId: string;
  locationId: string;
  name: string;
  pipelineStageId?: string;
  status: CreateDto.status;
  contactId: string;
  monetaryValue?: number;
  assignedTo?: string;
  /**
   * Add custom fields to opportunities.
   */
  customFields?: Array<(customFieldsInputStringSchema | customFieldsInputArraySchema | customFieldsInputObjectSchema)>;
};
export namespace CreateDto {
  export enum status {
    OPEN = 'open',
    WON = 'won',
    LOST = 'lost',
    ABANDONED = 'abandoned',
    ALL = 'all',
  }
}

