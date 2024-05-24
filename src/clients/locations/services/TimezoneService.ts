/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TimezoneService {
  /**
   * Fetch Timezones
   * Fetch the available timezones
   * @returns any Successful response
   * @throws ApiError
   */
  public static getTimezones({
    authorization,
    version,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/locations/{locationId}/timezones',
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
