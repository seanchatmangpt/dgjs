/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TiktokProfileSchema = {
  /**
   * Id
   */
  id?: string;
  /**
   * Name of account
   */
  name?: string;
  /**
   * Username of account
   */
  username?: string;
  /**
   * Avatar of profile account
   */
  avatar?: string;
  /**
   * Is verified
   */
  verified?: boolean;
  /**
   * Is connected
   */
  isConnected?: boolean;
  /**
   * Tiktok Account Type must be one of the following values: business, profile
   */
  type?: Record<string, any>;
};

