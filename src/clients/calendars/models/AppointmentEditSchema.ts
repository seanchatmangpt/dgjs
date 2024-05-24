/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AppointmentEditSchema = {
  /**
   * Calendar Id
   */
  calendarId?: string;
  /**
   * Start Time
   */
  startTime?: string;
  /**
   * End Time
   */
  endTime?: string;
  /**
   * Title
   */
  title?: string;
  appointmentStatus?: AppointmentEditSchema.appointmentStatus;
  /**
   * Appointment Address
   */
  address?: string;
  /**
   * If set to true, the minimum scheduling notice and date range would be ignored
   */
  ignoreDateRange?: boolean;
  /**
   * If set to false, the automations will not run
   */
  toNotify?: boolean;
};
export namespace AppointmentEditSchema {
  export enum appointmentStatus {
    NEW = 'new',
    CONFIRMED = 'confirmed',
    CANCELLED = 'cancelled',
    SHOWED = 'showed',
    NOSHOW = 'noshow',
    INVALID = 'invalid',
  }
}

