/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TeamMemeber = {
  userId: string;
  priority?: TeamMemeber.priority;
  /**
   * Meeting Location Type. For class booking only the following types are allowed 'custom', 'phone', 'address'.
   */
  meetingLocationType?: TeamMemeber.meetingLocationType;
  meetingLocation?: string;
  /**
   * Marks a user as primary. This property is required in case of collective booking calendars. Only one user can be primary.
   */
  isPrimary?: boolean;
};
export namespace TeamMemeber {
  export enum priority {
    '_0' = 0,
    '_0.5' = 0.5,
    '_1' = 1,
  }
  /**
   * Meeting Location Type. For class booking only the following types are allowed 'custom', 'phone', 'address'.
   */
  export enum meetingLocationType {
    CUSTOM = 'custom',
    ZOOM = 'zoom',
    GMEET = 'gmeet',
    PHONE = 'phone',
    ADDRESS = 'address',
  }
}

