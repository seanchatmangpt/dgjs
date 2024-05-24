/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchUserSuccessfulResponseDto } from '../models/SearchUserSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
  /**
   * Search Users
   * Search Users
   * @returns SearchUserSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static searchUsers({
    authorization,
    version,
    companyId,
    query,
    skip = '0',
    limit = '25',
    locationId,
    type,
    role,
    ids,
    sort,
    sortDirection,
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
     * Company ID in which the search needs to be performed
     */
    companyId: string,
    /**
     * The search term for the user is matched based on the user full name, email or phone
     */
    query?: string,
    /**
     * No of results to be skipped before returning the result
     */
    skip?: string,
    /**
     * No of results to be limited before returning the result
     */
    limit?: string,
    /**
     * Location ID in which the search needs to be performed
     */
    locationId?: string,
    /**
     * Type of the users to be filtered in the search
     */
    type?: string,
    /**
     * Role of the users to be filtered in the search
     */
    role?: string,
    /**
     * List of User IDs to be filtered in the search
     */
    ids?: string,
    /**
     * The field on which sort is applied in which the results need to be sorted. Default is based on the first and last name
     */
    sort?: string,
    /**
     * The direction in which the results need to be sorted
     */
    sortDirection?: string,
  }): CancelablePromise<SearchUserSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/search',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'companyId': companyId,
        'query': query,
        'skip': skip,
        'limit': limit,
        'locationId': locationId,
        'type': type,
        'role': role,
        'ids': ids,
        'sort': sort,
        'sortDirection': sortDirection,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
