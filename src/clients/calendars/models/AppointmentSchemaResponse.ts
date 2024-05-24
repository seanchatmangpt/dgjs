/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AppointmentSchemaResponse = {
  /**
   * Calendar Id
   */
  calendarId: string;
  /**
   * Location Id
   */
  locationId: string;
  /**
   * Contact Id
   */
  contactId: string;
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
  appointmentStatus?: AppointmentSchemaResponse.appointmentStatus;
  /**
   * Assigned User Id
   */
  assignedUserId?: string;
  /**
   * Appointment Address
   */
  address?: string;
  /**
   * Id
   */
  id: string;
};
export namespace AppointmentSchemaResponse {
  export enum appointmentStatus {
    NEW = 'new',
    CONFIRMED = 'confirmed',
    CANCELLED = 'cancelled',
    SHOWED = 'showed',
    NOSHOW = 'noshow',
    INVALID = 'invalid',
  }
}

