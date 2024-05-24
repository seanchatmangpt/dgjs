/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RedirectResponseDTO = {
  /**
   * Unique identifier of the redirect
   */
  id: string;
  /**
   * Identifier of the location associated with the redirect
   */
  locationId: string;
  /**
   * Domain where the redirect occurs
   */
  domain: string;
  /**
   * Original path that will be redirected
   */
  path: string;
  /**
   * Lowercase version of the original path
   */
  pathLowercase: string;
  /**
   * Type of redirect (e.g., Permanent, Temporary)
   */
  type: string;
  /**
   * Target URL to which the original path will be redirected
   */
  target: string;
  /**
   * Action performed by the redirect
   */
  action: string;
};

