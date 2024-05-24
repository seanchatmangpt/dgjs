/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CalendarEventDTO = {
  /**
   * Calendar Event ID
   */
  id: string;
  /**
   * Calendar Event address
   */
  address?: string;
  /**
   * Calendar Event title
   */
  title: string;
  /**
   * Calendar ID
   */
  calendarId: string;
  /**
   * Location ID
   */
  locationId: string;
  /**
   * Contact ID
   */
  contactId: string;
  /**
   * Group ID
   */
  groupId: string;
  /**
   * Appointment Status
   */
  appointmentStatus: string;
  /**
   * AssignedUser - the primary owner of an appointment
   */
  assignedUserId: string;
  /**
   * Users - the secondary owners of an appointment.
   */
  users: Array<string>;
  /**
   * Notes
   */
  notes?: string;
  /**
   * Start Time
   */
  startTime: Record<string, any>;
  /**
   * End Time
   */
  endTime: Record<string, any>;
  /**
   * Date Added
   */
  dateAdded: Record<string, any>;
  /**
   * Date Updated
   */
  dateUpdated: Record<string, any>;
};

