/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetPipelinesSuccessfulResponseDto } from '../models/GetPipelinesSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PipelinesService {
  /**
   * Get Pipelines
   * Get Pipelines
   * @returns GetPipelinesSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getPipelines({
    authorization,
    version,
    locationId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    locationId: string,
  }): CancelablePromise<GetPipelinesSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/opportunities/pipelines',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
}
