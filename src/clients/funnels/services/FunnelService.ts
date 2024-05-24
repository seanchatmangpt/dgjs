/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelListResponseDTO } from '../models/FunnelListResponseDTO';
import type { FunnelPageResponseDTO } from '../models/FunnelPageResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FunnelService {
  /**
   * Fetch List of Funnels
   * Retrieves a list of all funnels based on the given query parameters.
   * @returns FunnelListResponseDTO Successful response - List of funnels returned
   * @throws ApiError
   */
  public static getFunnels({
    authorization,
    locationId,
    type,
    category,
    offset,
    limit,
    parentId,
    name,
    search,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    locationId: string,
    type?: string,
    category?: string,
    offset?: string,
    limit?: string,
    parentId?: string,
    name?: string,
    search?: string,
  }): CancelablePromise<FunnelListResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/funnels/funnel/list',
      headers: {
        'Authorization': authorization,
      },
      query: {
        'locationId': locationId,
        'type': type,
        'category': category,
        'offset': offset,
        'limit': limit,
        'parentId': parentId,
        'name': name,
        'search': search,
      },
    });
  }
  /**
   * Fetch list of funnel pages
   * Retrieves a list of all funnel pages based on the given query parameters.
   * @returns FunnelPageResponseDTO Successful response - List of funnel pages returned
   * @throws ApiError
   */
  public static getPagesByFunnelId({
    authorization,
    locationId,
    funnelId,
    limit,
    offset,
    name,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    locationId: string,
    funnelId: string,
    limit: number,
    offset: number,
    name?: string,
  }): CancelablePromise<FunnelPageResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/funnels/page',
      headers: {
        'Authorization': authorization,
      },
      query: {
        'locationId': locationId,
        'funnelId': funnelId,
        'name': name,
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
