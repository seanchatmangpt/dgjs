/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountsListResponseDTO } from '../models/AccountsListResponseDTO';
import type { LocationAndAccountDeleteResponseDTO } from '../models/LocationAndAccountDeleteResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountService {
  /**
   * Get Accounts
   * Get list of accounts and groups
   * @returns AccountsListResponseDTO Successful response
   * @throws ApiError
   */
  public static getAccount({
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
    /**
     * Location Id
     */
    locationId: string,
  }): CancelablePromise<AccountsListResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/social-media-posting/{locationId}/accounts',
      path: {
        'locationId': locationId,
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
   * Delete Account
   * Delete account and account from group
   * @returns LocationAndAccountDeleteResponseDTO Successful response
   * @throws ApiError
   */
  public static deleteAccount({
    authorization,
    version,
    locationId,
    id,
    companyId,
    userId,
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
    /**
     * Id
     */
    id: string,
    /**
     * Company ID
     */
    companyId?: string,
    /**
     * User ID
     */
    userId?: string,
  }): CancelablePromise<LocationAndAccountDeleteResponseDTO> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/social-media-posting/{locationId}/accounts/{id}',
      path: {
        'locationId': locationId,
        'id': id,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'companyId': companyId,
        'userId': userId,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
