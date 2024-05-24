/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetAccessCodeSuccessfulResponseDto = {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  userType?: string;
  /**
   * Location ID - Present only for Sub-Account Access Token
   */
  locationId?: string;
  /**
   * Company ID
   */
  companyId?: string;
  /**
   * Approved locations to generate location access token
   */
  approvedLocations?: Array<string>;
  /**
   * USER ID - Represent user id of person who performed installation
   */
  userId: string;
  /**
   * Plan Id of the subscribed plan in paid apps.
   */
  planId?: string;
};

