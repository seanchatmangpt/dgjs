/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetEventsSuccessfulResponseDto } from '../models/GetEventsSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AppointmentsService {
  /**
   * Get Appointments for Contact
   * Get Appointments for Contact
   * @returns GetEventsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getAppointmentsForContact({
    authorization,
    version,
    contactId,
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
     * Contact Id
     */
    contactId: string,
  }): CancelablePromise<GetEventsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contacts/{contactId}/appointments',
      path: {
        'contactId': contactId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
