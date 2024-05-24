/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutoPaymentInvoiceScheduleResponseDto } from '../models/AutoPaymentInvoiceScheduleResponseDto';
import type { AutoPaymentScheduleDto } from '../models/AutoPaymentScheduleDto';
import type { CancelInvoiceScheduleDto } from '../models/CancelInvoiceScheduleDto';
import type { CancelInvoiceScheduleResponseDto } from '../models/CancelInvoiceScheduleResponseDto';
import type { CreateInvoiceScheduleDto } from '../models/CreateInvoiceScheduleDto';
import type { CreateInvoiceScheduleResponseDto } from '../models/CreateInvoiceScheduleResponseDto';
import type { DeleteInvoiceScheduleResponseDto } from '../models/DeleteInvoiceScheduleResponseDto';
import type { GetScheduleResponseDto } from '../models/GetScheduleResponseDto';
import type { ListSchedulesResponseDto } from '../models/ListSchedulesResponseDto';
import type { ScheduleInvoiceScheduleDto } from '../models/ScheduleInvoiceScheduleDto';
import type { ScheduleInvoiceScheduleResponseDto } from '../models/ScheduleInvoiceScheduleResponseDto';
import type { UpdateInvoiceScheduleDto } from '../models/UpdateInvoiceScheduleDto';
import type { UpdateInvoiceScheduleResponseDto } from '../models/UpdateInvoiceScheduleResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ScheduleService {
  /**
   * Create Invoice Schedule
   * API to create an invoice Schedule
   * @returns CreateInvoiceScheduleResponseDto Successful response
   * @throws ApiError
   */
  public static createInvoiceSchedule({
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
    version: '2021-07-28',
    requestBody: CreateInvoiceScheduleDto,
  }): CancelablePromise<CreateInvoiceScheduleResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/invoices/schedule',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * List schedules
   * API to get list of schedules
   * @returns ListSchedulesResponseDto Successful response
   * @throws ApiError
   */
  public static listInvoiceSchedules({
    authorization,
    version,
    altId,
    altType,
    limit,
    offset,
    status,
    startAt,
    endAt,
    search,
    paymentMode,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    /**
     * location Id / company Id based on altType
     */
    altId: string,
    /**
     * Alt Type
     */
    altType: 'location',
    /**
     * Limit the number of items to return
     */
    limit: string,
    /**
     * Number of items to skip
     */
    offset: string,
    /**
     * status to be filtered
     */
    status?: string,
    /**
     * startAt in YYYY-MM-DD format
     */
    startAt?: string,
    /**
     * endAt in YYYY-MM-DD format
     */
    endAt?: string,
    /**
     * To search for an invoice by id / name / email / phoneNo
     */
    search?: string,
    /**
     * payment mode
     */
    paymentMode?: 'default' | 'live',
  }): CancelablePromise<ListSchedulesResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoices/schedule',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'altId': altId,
        'altType': altType,
        'status': status,
        'startAt': startAt,
        'endAt': endAt,
        'search': search,
        'paymentMode': paymentMode,
        'limit': limit,
        'offset': offset,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Get an schedule
   * API to get an schedule by schedule id
   * @returns GetScheduleResponseDto Successful response
   * @throws ApiError
   */
  public static getInvoiceSchedule({
    authorization,
    version,
    scheduleId,
    altId,
    altType,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    /**
     * Schedule Id
     */
    scheduleId: string,
    /**
     * location Id / company Id based on altType
     */
    altId: string,
    /**
     * Alt Type
     */
    altType: 'location',
  }): CancelablePromise<GetScheduleResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoices/schedule/{scheduleId}',
      path: {
        'scheduleId': scheduleId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'altId': altId,
        'altType': altType,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Update schedule
   * API to update an schedule by schedule id
   * @returns UpdateInvoiceScheduleResponseDto Successful response
   * @throws ApiError
   */
  public static updateInvoiceSchedule({
    authorization,
    version,
    scheduleId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    /**
     * Schedule Id
     */
    scheduleId: string,
    requestBody: UpdateInvoiceScheduleDto,
  }): CancelablePromise<UpdateInvoiceScheduleResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/invoices/schedule/{scheduleId}',
      path: {
        'scheduleId': scheduleId,
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
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Delete schedule
   * API to delete an schedule by schedule id
   * @returns DeleteInvoiceScheduleResponseDto Successful response
   * @throws ApiError
   */
  public static deleteInvoiceSchedule({
    authorization,
    version,
    scheduleId,
    altId,
    altType,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    /**
     * Schedule Id
     */
    scheduleId: string,
    /**
     * location Id / company Id based on altType
     */
    altId: string,
    /**
     * Alt Type
     */
    altType: 'location',
  }): CancelablePromise<DeleteInvoiceScheduleResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/invoices/schedule/{scheduleId}',
      path: {
        'scheduleId': scheduleId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'altId': altId,
        'altType': altType,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Schedule an schedule invoice
   * API to schedule an schedule invoice to start sending to the customer
   * @returns ScheduleInvoiceScheduleResponseDto Successful response
   * @throws ApiError
   */
  public static scheduleInvoiceSchedule({
    authorization,
    version,
    scheduleId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    /**
     * Schedule Id
     */
    scheduleId: string,
    requestBody: ScheduleInvoiceScheduleDto,
  }): CancelablePromise<ScheduleInvoiceScheduleResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/invoices/schedule/{scheduleId}/schedule',
      path: {
        'scheduleId': scheduleId,
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
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Manage Auto payment for an schedule invoice
   * API to manage auto payment for a schedule
   * @returns AutoPaymentInvoiceScheduleResponseDto Successful response
   * @throws ApiError
   */
  public static autoPaymentInvoiceSchedule({
    authorization,
    version,
    scheduleId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    /**
     * Schedule Id
     */
    scheduleId: string,
    requestBody: AutoPaymentScheduleDto,
  }): CancelablePromise<AutoPaymentInvoiceScheduleResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/invoices/schedule/{scheduleId}/auto-payment',
      path: {
        'scheduleId': scheduleId,
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
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Cancel an scheduled invoice
   * API to cancel a scheduled invoice by schedule id
   * @returns CancelInvoiceScheduleResponseDto Successful response
   * @throws ApiError
   */
  public static cancelInvoiceSchedule({
    authorization,
    version,
    scheduleId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    /**
     * Schedule Id
     */
    scheduleId: string,
    requestBody: CancelInvoiceScheduleDto,
  }): CancelablePromise<CancelInvoiceScheduleResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/invoices/schedule/{scheduleId}/cancel',
      path: {
        'scheduleId': scheduleId,
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
        422: `Unprocessable Entity`,
      },
    });
  }
}
