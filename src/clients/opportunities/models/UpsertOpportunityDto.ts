/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpsertOpportunityDto = {
  /**
   * pipeline Id
   */
  pipelineId: string;
  /**
   * locationId
   */
  locationId: string;
  /**
   * contactId
   */
  contactId: string;
  /**
   * name
   */
  name?: string;
  status?: UpsertOpportunityDto.status;
  pipelineStageId?: string;
  monetaryValue?: number;
  assignedTo?: string;
};
export namespace UpsertOpportunityDto {
  export enum status {
    OPEN = 'open',
    WON = 'won',
    LOST = 'lost',
    ABANDONED = 'abandoned',
    ALL = 'all',
  }
}

