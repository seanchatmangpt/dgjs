/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDto } from '../models/CreateDto';
import type { DeleteUpdateOpportunitySuccessfulResponseDto } from '../models/DeleteUpdateOpportunitySuccessfulResponseDto';
import type { GetPostOpportunitySuccessfulResponseDto } from '../models/GetPostOpportunitySuccessfulResponseDto';
import type { UpdateOpportunityDto } from '../models/UpdateOpportunityDto';
import type { UpdateStatusDto } from '../models/UpdateStatusDto';
import type { UpsertOpportunityDto } from '../models/UpsertOpportunityDto';
import type { UpsertOpportunitySuccessfulResponseDto } from '../models/UpsertOpportunitySuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OpportunitiesService {
  /**
   * Get Opportunity
   * Get Opportunity
   * @returns GetPostOpportunitySuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getOpportunity({
    authorization,
    version,
    id,
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
     * Opportunity Id
     */
    id: string,
  }): CancelablePromise<GetPostOpportunitySuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/opportunities/{id}',
      path: {
        'id': id,
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
  /**
   * Delete Opportunity
   * Delete Opportunity
   * @returns DeleteUpdateOpportunitySuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteOpportunity({
    authorization,
    version,
    id,
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
     * Opportunity Id
     */
    id: string,
  }): CancelablePromise<DeleteUpdateOpportunitySuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/opportunities/{id}',
      path: {
        'id': id,
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
  /**
   * Update Opportunity
   * Update Opportunity
   * @returns GetPostOpportunitySuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static updateOpportunity({
    authorization,
    version,
    id,
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
     * Opportunity Id
     */
    id: string,
    requestBody: UpdateOpportunityDto,
  }): CancelablePromise<GetPostOpportunitySuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/opportunities/{id}',
      path: {
        'id': id,
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
   * Update Opportunity Status
   * Update Opportunity Status
   * @returns DeleteUpdateOpportunitySuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static updateOpportunityStatus({
    authorization,
    version,
    id,
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
     * Opportunity Id
     */
    id: string,
    requestBody: UpdateStatusDto,
  }): CancelablePromise<DeleteUpdateOpportunitySuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/opportunities/{id}/status',
      path: {
        'id': id,
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
   * Upsert Opportunity
   * Upsert Opportunity
   * @returns UpsertOpportunitySuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static upsertOpportunity({
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
    requestBody: UpsertOpportunityDto,
  }): CancelablePromise<UpsertOpportunitySuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/opportunities/upsert',
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
   * Create Opportunity
   * Create Opportunity
   * @returns GetPostOpportunitySuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static createOpportunity({
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
    requestBody: CreateDto,
  }): CancelablePromise<GetPostOpportunitySuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/opportunities/',
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
