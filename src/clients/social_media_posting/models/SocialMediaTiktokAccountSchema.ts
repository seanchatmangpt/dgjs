/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SocialMediaTiktokAccountSchema = {
  _id?: string;
  oAuthId?: string;
  oldId?: string;
  locationId?: string;
  originId?: string;
  platform?: Record<string, any>;
  /**
   * type must be one of the following values: profile, business
   */
  type?: Record<string, any>;
  name?: string;
  avatar?: string;
  meta?: Record<string, any>;
  active?: boolean;
  deleted?: boolean;
  /**
   * created date
   */
  createdAt?: string;
  /**
   * updated date
   */
  updatedAt?: string;
};

