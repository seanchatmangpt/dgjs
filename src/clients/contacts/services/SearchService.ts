/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
  /**
   * Get Duplicate Contact
   * Get Duplicate Contact.<br><br>If `Allow Duplicate Contact` is disabled under Settings, the global unique identifier will be used for searching the contact. If the setting is enabled, first priority for search is `email` and the second priority will be `phone`.
   * @returns any
   * @throws ApiError
   */
  public static getDuplicateContact({
    authorization,
    version,
    locationId,
    number,
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
     * Location Id
     */
    locationId: string,
    /**
     * Phone Number - Pass in URL Encoded form. i.e +1423164516 will become `%2B1423164516`
     */
    number?: string,
    /**
     * Email - Pass in URL Encoded form. i.e test+abc@gmail.com will become `test%2Babc%40gmail.com`
     */
    email?: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contacts/search/duplicate',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'number': number,
        'email': email,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
}
