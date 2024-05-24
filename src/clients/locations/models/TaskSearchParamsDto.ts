/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskSearchParamsDto = {
  /**
   * Contact Ids
   */
  contactId?: Array<string>;
  /**
   * Task Completed Or Pending
   */
  completed?: boolean;
  /**
   * Assigned User Ids
   */
  assignedTo?: Array<string>;
  /**
   * Search Value
   */
  query?: string;
  /**
   * Limit To Api
   */
  limit?: number;
  /**
   * Number Of Tasks To Skip
   */
  skip?: number;
  /**
   * Bussiness Id
   */
  businessId?: string;
};

