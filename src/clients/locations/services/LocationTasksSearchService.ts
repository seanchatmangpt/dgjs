/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocationTaskListSuccessfulResponseDto } from '../models/LocationTaskListSuccessfulResponseDto';
import type { TaskSearchParamsDto } from '../models/TaskSearchParamsDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LocationTasksSearchService {
  /**
   * Task Search Filter
   * Task Search
   * @returns LocationTaskListSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static taskSearch({
    authorization,
    version,
    locationId,
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
     * Location Id
     */
    locationId: string,
    requestBody: TaskSearchParamsDto,
  }): CancelablePromise<LocationTaskListSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/locations/{locationId}/tasks/search',
      path: {
        'locationId': locationId,
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
