/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchSuccessfulResponseDto } from '../models/SearchSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LocationSearchService {
  /**
   * Search Locations
   * Search Locations
   * @returns SearchSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static searchLocations({
    authorization,
    version,
    companyId,
    skip = '0',
    limit = '10',
    order = 'asc',
    email,
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
     * The company/agency id on which you want to perform the search
     */
    companyId?: string,
    /**
     * The value by which the results should be skipped. Default will be 0
     */
    skip?: string,
    /**
     * The value by which the results should be limited. Default will be 10
     */
    limit?: string,
    /**
     * The order in which the results should be returned - Allowed values asc, desc. Default will be asc
     */
    order?: string,
    email?: string,
  }): CancelablePromise<SearchSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/locations/search',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'companyId': companyId,
        'skip': skip,
        'limit': limit,
        'order': order,
        'email': email,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
