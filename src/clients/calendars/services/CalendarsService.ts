/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalendarByIdSuccessfulResponseDTO } from '../models/CalendarByIdSuccessfulResponseDTO';
import type { CalendarCreateDTO } from '../models/CalendarCreateDTO';
import type { CalendarDeleteSuccessfulResponseDTO } from '../models/CalendarDeleteSuccessfulResponseDTO';
import type { CalendarsGetSuccessfulResponseDTO } from '../models/CalendarsGetSuccessfulResponseDTO';
import type { CalendarUpdateDTO } from '../models/CalendarUpdateDTO';
import type { GetSlotsSuccessfulResponseDto } from '../models/GetSlotsSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CalendarsService {
  /**
   * Get Free Slots
   * Get free slots for a calendar between a date range. Optionally a consumer can also request free slots in a particular timezone and also for a particular user.
   * @returns GetSlotsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getSlots({
    authorization,
    version,
    calendarId,
    startDate,
    endDate,
    timezone,
    userId,
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
     * Calendar Id
     */
    calendarId: string,
    /**
     * Start Date
     */
    startDate: string,
    /**
     * End Date
     */
    endDate: string,
    /**
     * The timezone in which the free slots are returned
     */
    timezone?: string,
    /**
     * The user for whom the free slots are returned
     */
    userId?: string,
  }): CancelablePromise<GetSlotsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/calendars/{calendarId}/free-slots',
      path: {
        'calendarId': calendarId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'startDate': startDate,
        'endDate': endDate,
        'timezone': timezone,
        'userId': userId,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Update Calendar
   * Update calendar by ID.
   * @returns CalendarByIdSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static updateCalendar({
    authorization,
    version,
    calendarId,
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
     * Calendar Id
     */
    calendarId: string,
    requestBody: CalendarUpdateDTO,
  }): CancelablePromise<CalendarByIdSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/calendars/{calendarId}',
      path: {
        'calendarId': calendarId,
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
   * Get Calendar
   * Get calendar by ID
   * @returns CalendarByIdSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static getCalendar({
    authorization,
    version,
    calendarId,
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
     * Calendar Id
     */
    calendarId: string,
  }): CancelablePromise<CalendarByIdSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/calendars/{calendarId}',
      path: {
        'calendarId': calendarId,
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
   * Delete Calendar
   * Delete calendar by ID
   * @returns CalendarDeleteSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static deleteCalendar({
    authorization,
    version,
    calendarId,
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
     * Calendar Id
     */
    calendarId: string,
  }): CancelablePromise<CalendarDeleteSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/calendars/{calendarId}',
      path: {
        'calendarId': calendarId,
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
   * Get Calendars
   * Get all calendars in a location.
   * @returns CalendarsGetSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static getCalendars({
    authorization,
    version,
    locationId,
    groupId,
    showDrafted = true,
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
     * Group Id
     */
    groupId?: string,
    /**
     * Show drafted
     */
    showDrafted?: boolean,
  }): CancelablePromise<CalendarsGetSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/calendars/',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'groupId': groupId,
        'showDrafted': showDrafted,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Create Calendar
   * Create calendar in a location.
   * @returns CalendarByIdSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static createCalendar({
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
    requestBody: CalendarCreateDTO,
  }): CancelablePromise<CalendarByIdSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/calendars/',
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
