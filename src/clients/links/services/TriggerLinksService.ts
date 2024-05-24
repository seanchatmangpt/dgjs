/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteLinksSuccessfulResponseDto } from '../models/DeleteLinksSuccessfulResponseDto';
import type { GetLinksSuccessfulResponseDto } from '../models/GetLinksSuccessfulResponseDto';
import type { GetLinkSuccessfulResponseDto } from '../models/GetLinkSuccessfulResponseDto';
import type { LinksDto } from '../models/LinksDto';
import type { LinkUpdateDto } from '../models/LinkUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TriggerLinksService {
  /**
   * Update Link
   * Update Link
   * @returns GetLinkSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static updateLink({
    authorization,
    version,
    linkId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * Api Version
     */
    version: string,
    /**
     * Link Id
     */
    linkId: string,
    requestBody: LinkUpdateDto,
  }): CancelablePromise<GetLinkSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/links/{linkId}',
      path: {
        'linkId': linkId,
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
   * Delete Link
   * Delete Link
   * @returns DeleteLinksSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteLink({
    authorization,
    version,
    linkId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * Api Version
     */
    version: string,
    /**
     * Link Id
     */
    linkId: string,
  }): CancelablePromise<DeleteLinksSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/links/{linkId}',
      path: {
        'linkId': linkId,
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
   * Get Links
   * Get Links
   * @returns GetLinksSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getLinks({
    authorization,
    version,
    locationId,
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
  }): CancelablePromise<GetLinksSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/links/',
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
  /**
   * Create Link
   * Create Link
   * @returns GetLinkSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static createLink({
    authorization,
    version,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * Api Version
     */
    version: string,
    requestBody: LinksDto,
  }): CancelablePromise<GetLinkSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/links/',
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
