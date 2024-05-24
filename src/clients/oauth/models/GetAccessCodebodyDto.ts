/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetAccessCodebodyDto = {
  /**
   * The ID provided by GHL for your integration
   */
  client_id: string;
  client_secret: string;
  grant_type: GetAccessCodebodyDto.grant_type;
  code?: string;
  refresh_token?: string;
  /**
   * The type of token to be requested
   */
  user_type?: GetAccessCodebodyDto.user_type;
  /**
   * The redirect URI for your application
   */
  redirect_uri?: string;
};
export namespace GetAccessCodebodyDto {
  export enum grant_type {
    AUTHORIZATION_CODE = 'authorization_code',
    REFRESH_TOKEN = 'refresh_token',
  }
  /**
   * The type of token to be requested
   */
  export enum user_type {
    COMPANY = 'Company',
    LOCATION = 'Location',
  }
}

