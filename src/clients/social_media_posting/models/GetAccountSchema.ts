/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetAccountSchema = {
  id?: string;
  oauthId?: string;
  profileId?: string;
  name?: string;
  /**
   * platform must be one of the following values: google, facebook, instagram, linkedin, twitter, tiktok
   */
  platform?: string;
  type?: string;
  expire?: string;
  isExpired?: boolean;
  meta?: Record<string, any>;
};

