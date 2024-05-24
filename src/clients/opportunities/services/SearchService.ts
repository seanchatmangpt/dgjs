/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchSuccessfulResponseDto } from '../models/SearchSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
  /**
   * Search Opportunity
   * Search Opportunity
   * @returns SearchSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static searchOpportunity({
    authorization,
    version,
    locationId,
    q,
    pipelineId,
    pipelineStageId,
    contactId,
    status,
    assignedTo,
    campaignId,
    id,
    order,
    endDate,
    startAfter,
    startAfterId,
    date,
    country,
    page = 1,
    limit = 20,
    getTasks,
    getNotes,
    getCalendarEvents,
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
    q?: string,
    /**
     * Pipeline Id
     */
    pipelineId?: string,
    /**
     * stage Id
     */
    pipelineStageId?: string,
    /**
     * Contact Id
     */
    contactId?: string,
    status?: 'open' | 'won' | 'lost' | 'abandoned' | 'all',
    assignedTo?: string,
    /**
     * Campaign Id
     */
    campaignId?: string,
    /**
     * Opportunity Id
     */
    id?: string,
    order?: string,
    /**
     * End date
     */
    endDate?: string,
    /**
     * Start After
     */
    startAfter?: string,
    /**
     * Start After Id
     */
    startAfterId?: string,
    /**
     * Start date
     */
    date?: string,
    country?: string,
    page?: number,
    /**
     * Limit Per Page records count. will allow maximum up to 100 and default will be 20
     */
    limit?: number,
    /**
     * get Tasks in contact
     */
    getTasks?: boolean,
    /**
     * get Notes in contact
     */
    getNotes?: boolean,
    /**
     * get Calender event in contact
     */
    getCalendarEvents?: boolean,
  }): CancelablePromise<SearchSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/opportunities/search',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'q': q,
        'location_id': locationId,
        'pipeline_id': pipelineId,
        'pipeline_stage_id': pipelineStageId,
        'contact_id': contactId,
        'status': status,
        'assigned_to': assignedTo,
        'campaignId': campaignId,
        'id': id,
        'order': order,
        'endDate': endDate,
        'startAfter': startAfter,
        'startAfterId': startAfterId,
        'date': date,
        'country': country,
        'page': page,
        'limit': limit,
        'getTasks': getTasks,
        'getNotes': getNotes,
        'getCalendarEvents': getCalendarEvents,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
