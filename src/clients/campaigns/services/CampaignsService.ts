/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CampaignsSuccessfulResponseDto } from '../models/CampaignsSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CampaignsService {
  /**
   * Get Campaigns
   * Get Campaigns
   * @returns CampaignsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getCampaigns({
    authorization,
    version,
    locationId,
    status,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * Api Version
     */
    version: string,
    locationId: string,
    status?: string,
  }): CancelablePromise<CampaignsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/campaigns/',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'status': status,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
