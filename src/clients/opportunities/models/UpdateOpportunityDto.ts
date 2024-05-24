/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFieldsInputArraySchema } from './customFieldsInputArraySchema';
import type { customFieldsInputObjectSchema } from './customFieldsInputObjectSchema';
import type { customFieldsInputStringSchema } from './customFieldsInputStringSchema';
export type UpdateOpportunityDto = {
  /**
   * pipeline Id
   */
  pipelineId?: string;
  name?: string;
  pipelineStageId?: string;
  status?: UpdateOpportunityDto.status;
  monetaryValue?: number;
  assignedTo?: string;
  /**
   * Update custom fields to opportunities.
   */
  customFields?: Array<(customFieldsInputStringSchema | customFieldsInputArraySchema | customFieldsInputObjectSchema)>;
};
export namespace UpdateOpportunityDto {
  export enum status {
    OPEN = 'open',
    WON = 'won',
    LOST = 'lost',
    ABANDONED = 'abandoned',
    ALL = 'all',
  }
}

