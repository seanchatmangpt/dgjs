/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocationTagDeleteSuccessfulResponseDto } from '../models/LocationTagDeleteSuccessfulResponseDto';
import type { LocationTagsSuccessfulResponseDto } from '../models/LocationTagsSuccessfulResponseDto';
import type { LocationTagSuccessfulResponseDto } from '../models/LocationTagSuccessfulResponseDto';
import type { tagBody } from '../models/tagBody';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LocationTagsService {
  /**
   * Get Location Tags
   * Get Location Tags
   * @returns LocationTagsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getLocationTags({
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
  }): CancelablePromise<LocationTagsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/locations/{locationId}/tags',
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
   * Create Tag
   * Create tag
   * @returns LocationTagSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static createTag({
    authorization,
    version,
    locationId,
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
     * Location Id
     */
    locationId: string,
    requestBody: tagBody,
  }): CancelablePromise<LocationTagSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/locations/{locationId}/tags',
      path: {
        'locationId': locationId,
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
   * Get tag by id
   * Get tag by id
   * @returns LocationTagSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getTagById({
    authorization,
    version,
    locationId,
    tagId,
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
     * Tag Id
     */
    tagId: string,
  }): CancelablePromise<LocationTagSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/locations/{locationId}/tags/{tagId}',
      path: {
        'locationId': locationId,
        'tagId': tagId,
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
   * Update tag
   * Update tag
   * @returns LocationTagSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static updateTag({
    authorization,
    version,
    locationId,
    tagId,
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
     * Location Id
     */
    locationId: string,
    /**
     * Tag Id
     */
    tagId: string,
    requestBody: tagBody,
  }): CancelablePromise<LocationTagSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/locations/{locationId}/tags/{tagId}',
      path: {
        'locationId': locationId,
        'tagId': tagId,
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
   * Delete tag
   * Delete tag
   * @returns LocationTagDeleteSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteTag({
    authorization,
    version,
    locationId,
    tagId,
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
     * Tag Id
     */
    tagId: string,
  }): CancelablePromise<LocationTagDeleteSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/locations/{locationId}/tags/{tagId}',
      path: {
        'locationId': locationId,
        'tagId': tagId,
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
}
