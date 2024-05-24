/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SearchPostDTO = {
  type?: string;
  accounts?: string;
  skip: string;
  limit: string;
  /**
   * From Date
   */
  fromDate: string;
  /**
   * To Date
   */
  toDate: string;
  /**
   * Include User Data
   */
  includeUsers: string;
  /**
   * Post Type must be one of the following values: - post, story, reel
   */
  postType?: Record<string, any>;
};

