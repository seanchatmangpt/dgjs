/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetLocationAccessTokenSuccessfulResponseDto = {
  /**
   * Location access token which can be used to authenticate & authorize API under following scope
   */
  access_token?: string;
  token_type?: string;
  /**
   * Time in seconds remaining for token to expire
   */
  expires_in?: number;
  /**
   * Scopes the following accessToken have access to
   */
  scope?: string;
  /**
   * Location ID - Present only for Sub-Account Access Token
   */
  locationId?: string;
  /**
   * USER ID - Represent user id of person who performed installation
   */
  userId: string;
};

