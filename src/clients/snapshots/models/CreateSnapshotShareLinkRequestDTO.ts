/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateSnapshotShareLinkRequestDTO = {
  /**
   * id for snapshot to be shared
   */
  snapshot_id: string;
  /**
   * Type of share link to generate
   */
  share_type: CreateSnapshotShareLinkRequestDTO.share_type;
  /**
   * Comma separated Relationship number of Agencies to create agency restricted share link
   */
  relationship_number?: string;
  /**
   * Comma separated Sub-Account ids to create sub-account restricted share link
   */
  share_location_id?: string;
};
export namespace CreateSnapshotShareLinkRequestDTO {
  /**
   * Type of share link to generate
   */
  export enum share_type {
    LINK = 'link',
    PERMANENT_LINK = 'permanent_link',
    AGENCY_LINK = 'agency_link',
    LOCATION_LINK = 'location_link',
  }
}

