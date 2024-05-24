/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppointmentCreateSchema } from '../models/AppointmentCreateSchema';
import type { AppointmentEditSchema } from '../models/AppointmentEditSchema';
import type { AppointmentSchemaResponse } from '../models/AppointmentSchemaResponse';
import type { BlockSlotCreateSchema } from '../models/BlockSlotCreateSchema';
import type { BlockSlotEditSchema } from '../models/BlockSlotEditSchema';
import type { CreateBookedSlotSuccessfulResponseDto } from '../models/CreateBookedSlotSuccessfulResponseDto';
import type { DeleteAppointmentSchema } from '../models/DeleteAppointmentSchema';
import type { DeleteEventSuccessfulResponseDto } from '../models/DeleteEventSuccessfulResponseDto';
import type { GetCalendarEventsSuccessfulResponseDTO } from '../models/GetCalendarEventsSuccessfulResponseDTO';
import type { GetCalendarEventSuccessfulResponseDTO } from '../models/GetCalendarEventSuccessfulResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CalendarEventsService {
  /**
   * Get Calendar Events
   * Get Calendar Events
   * @returns GetCalendarEventsSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static getCalendarEvents({
    authorization,
    version,
    locationId,
    startTime,
    endTime,
    userId,
    calendarId,
    groupId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Location Id
     */
    locationId: string,
    /**
     * Start Time (in millis)
     */
    startTime: string,
    /**
     * End Time (in millis)
     */
    endTime: string,
    /**
     * User Id - Owner of an appointment. Either of userId, groupId or calendarId is required
     */
    userId?: string,
    /**
     * Either of calendarId, userId or groupId is required
     */
    calendarId?: string,
    /**
     * Either of groupId, calendarId or userId is required
     */
    groupId?: string,
  }): CancelablePromise<GetCalendarEventsSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/calendars/events',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'userId': userId,
        'calendarId': calendarId,
        'groupId': groupId,
        'startTime': startTime,
        'endTime': endTime,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Get Blocked Slots
   * Get Blocked Slots
   * @returns GetCalendarEventsSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static getBlockedSlots({
    authorization,
    version,
    locationId,
    startTime,
    endTime,
    userId,
    calendarId,
    groupId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Location Id
     */
    locationId: string,
    /**
     * Start Time (in millis)
     */
    startTime: string,
    /**
     * End Time (in millis)
     */
    endTime: string,
    /**
     * User Id - Owner of an appointment. Either of userId, groupId or calendarId is required
     */
    userId?: string,
    /**
     * Either of calendarId, userId or groupId is required
     */
    calendarId?: string,
    /**
     * Either of groupId, calendarId or userId is required
     */
    groupId?: string,
  }): CancelablePromise<GetCalendarEventsSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/calendars/blocked-slots',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'userId': userId,
        'calendarId': calendarId,
        'groupId': groupId,
        'startTime': startTime,
        'endTime': endTime,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Get Appointment
   * Get appointment by ID
   * @returns GetCalendarEventSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static getAppointment({
    authorization,
    version,
    eventId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Event Id
     */
    eventId: string,
  }): CancelablePromise<GetCalendarEventSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/calendars/events/appointments/{eventId}',
      path: {
        'eventId': eventId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Edit Appointment
   * Edit appointment by ID
   * @returns AppointmentSchemaResponse Successful response
   * @throws ApiError
   */
  public static editAppointment({
    authorization,
    version,
    eventId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Event Id
     */
    eventId: string,
    requestBody: AppointmentEditSchema,
  }): CancelablePromise<AppointmentSchemaResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/calendars/events/appointments/{eventId}',
      path: {
        'eventId': eventId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Create Appointment
   * Create appointment
   * @returns AppointmentSchemaResponse Successful response
   * @throws ApiError
   */
  public static createAppointment({
    authorization,
    version,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    requestBody: AppointmentCreateSchema,
  }): CancelablePromise<AppointmentSchemaResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/calendars/events/appointments',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Create Block Slot
   * Create block slot
   * @returns CreateBookedSlotSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static createBlockSlot({
    authorization,
    version,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    requestBody: BlockSlotCreateSchema,
  }): CancelablePromise<CreateBookedSlotSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/calendars/events/block-slots',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Edit Block Slot
   * Edit block slot by ID
   * @returns CreateBookedSlotSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static editBlockSlot({
    authorization,
    version,
    eventId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Event Id
     */
    eventId: string,
    requestBody: BlockSlotEditSchema,
  }): CancelablePromise<CreateBookedSlotSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/calendars/events/block-slots/{eventId}',
      path: {
        'eventId': eventId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Delete Event
   * Delete event by ID
   * @returns DeleteEventSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteEvent({
    authorization,
    version,
    eventId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Event Id
     */
    eventId: string,
    requestBody: DeleteAppointmentSchema,
  }): CancelablePromise<DeleteEventSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/calendars/events/{eventId}',
      path: {
        'eventId': eventId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
}
