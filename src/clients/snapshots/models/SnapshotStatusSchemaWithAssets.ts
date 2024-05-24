/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SnapshotStatusSchemaWithAssets = {
  /**
   * Document id
   */
  id?: string;
  /**
   * Sub-account id
   */
  locationId?: string;
  /**
   * Status of snapshot push
   */
  status?: string;
  /**
   * List of completed assets
   */
  completed?: Array<string>;
  /**
   * List of pending assets
   */
  pending?: Array<string>;
};

