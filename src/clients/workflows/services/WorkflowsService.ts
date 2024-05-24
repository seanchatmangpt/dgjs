/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetWorkflowSuccessfulResponseDto } from '../models/GetWorkflowSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkflowsService {
  /**
   * Get Workflow
   * Get Workflow
   * @returns GetWorkflowSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getWorkflow({
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
  }): CancelablePromise<GetWorkflowSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/workflows/',
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
        422: `Unprocessable Entity`,
      },
    });
  }
}
