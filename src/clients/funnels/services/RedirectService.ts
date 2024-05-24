/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRedirectParams } from '../models/CreateRedirectParams';
import type { CreateRedirectResponseDTO } from '../models/CreateRedirectResponseDTO';
import type { DeleteRedirectResponseDTO } from '../models/DeleteRedirectResponseDTO';
import type { RedirectListResponseDTO } from '../models/RedirectListResponseDTO';
import type { UpdateRedirectParams } from '../models/UpdateRedirectParams';
import type { UpdateRedirectResponseDTO } from '../models/UpdateRedirectResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RedirectService {
  /**
   * Create Redirect
   * The "Create Redirect" API Allows adding a new url redirect to the system. Use this endpoint to create a url redirect with the specified details. Ensure that the required information is provided in the request payload.
   * @returns CreateRedirectResponseDTO Successful response
   * @throws ApiError
   */
  public static createRedirect({
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
    requestBody: CreateRedirectParams,
  }): CancelablePromise<CreateRedirectResponseDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/funnels/lookup/redirect',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Update Redirect By Id
   * The "Update Redirect By Id" API Allows updating an existing URL redirect in the system. Use this endpoint to modify a URL redirect with the specified ID using details provided in the request payload.
   * @returns UpdateRedirectResponseDTO Successful response
   * @throws ApiError
   */
  public static updateRedirectById({
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
    id: string,
    requestBody: UpdateRedirectParams,
  }): CancelablePromise<UpdateRedirectResponseDTO> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/funnels/lookup/redirect/{id}',
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
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Delete Redirect By Id
   * The "Delete Redirect By Id" API Allows deletion of a URL redirect from the system using its unique identifier. Use this endpoint to delete a URL redirect with the specified ID using details provided in the request payload.
   * @returns DeleteRedirectResponseDTO Successful response - URL redirect deleted successfully
   * @throws ApiError
   */
  public static deleteRedirectById({
    authorization,
    version,
    id,
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
    id: string,
    locationId: string,
  }): CancelablePromise<DeleteRedirectResponseDTO> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/funnels/lookup/redirect/{id}',
      path: {
        'id': id,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
      },
      errors: {
        422: `Unprocessable Entity - The provided data is invalid or incomplete`,
      },
    });
  }
  /**
   * Fetch List of Redirects
   * Retrieves a list of all URL redirects based on the given query parameters.
   * @returns RedirectListResponseDTO Successful response - List of URL redirects returned
   * @throws ApiError
   */
  public static fetchRedirectsList({
    authorization,
    version,
    locationId,
    limit,
    offset,
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
    limit: number,
    offset: number,
  }): CancelablePromise<RedirectListResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/funnels/lookup/redirect/list',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'limit': limit,
        'offset': offset,
      },
      errors: {
        422: `Unprocessable Entity - The provided data is invalid or incomplete`,
      },
    });
  }
}
