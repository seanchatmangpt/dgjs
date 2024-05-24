/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GoogleLocationSchema = {
  name?: string;
  storeCode?: string;
  title?: string;
  /**
   * Meta data not related to User
   */
  metadata?: Record<string, any>;
  /**
   * Store front address
   */
  storefrontAddress?: Record<string, any>;
  /**
   * All locations and chain related to this one
   */
  relationshipData?: Record<string, any>;
  maxLocation?: boolean;
  isVerified?: boolean;
  isConnected?: boolean;
};

