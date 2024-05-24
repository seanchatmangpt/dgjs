/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CalendarNotification = {
  /**
   * Calendar Notification
   */
  type?: CalendarNotification.type;
  shouldSendToContact: boolean;
  shouldSendToGuest: boolean;
  shouldSendToUser: boolean;
  shouldSendToSelectedUsers: boolean;
  /**
   * Comma separated emails
   */
  selectedUsers: string;
};
export namespace CalendarNotification {
  /**
   * Calendar Notification
   */
  export enum type {
    EMAIL = 'email',
  }
}

