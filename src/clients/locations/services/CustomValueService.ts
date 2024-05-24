/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomValueDeleteSuccessfulResponseDto } from '../models/CustomValueDeleteSuccessfulResponseDto';
import type { CustomValueIdSuccessfulResponseDto } from '../models/CustomValueIdSuccessfulResponseDto';
import type { customValuesDTO } from '../models/customValuesDTO';
import type { CustomValuesListSuccessfulResponseDto } from '../models/CustomValuesListSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomValueService {
  /**
   * Get Custom Values
   * Get Custom Values
   * @returns CustomValuesListSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getCustomValues({
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
  }): CancelablePromise<CustomValuesListSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/locations/{locationId}/customValues',
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
      },
    });
  }
  /**
   * Create Custom Value
   * Create Custom Value
   * @returns CustomValueIdSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static createCustomValue({
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
    requestBody: customValuesDTO,
  }): CancelablePromise<CustomValueIdSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/locations/{locationId}/customValues',
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
   * Get Custom Value
   * Get Custom Value
   * @returns CustomValueIdSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getCustomValue({
    authorization,
    version,
    locationId,
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
     * Location Id
     */
    locationId: string,
    /**
     * Custom Value Id
     */
    id: string,
  }): CancelablePromise<CustomValueIdSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/locations/{locationId}/customValues/{id}',
      path: {
        'locationId': locationId,
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
   * Update Custom Value
   * Update Custom Value
   * @returns CustomValueIdSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static updateCustomValue({
    authorization,
    version,
    locationId,
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
     * Location Id
     */
    locationId: string,
    /**
     * Custom Value Id
     */
    id: string,
    requestBody: customValuesDTO,
  }): CancelablePromise<CustomValueIdSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/locations/{locationId}/customValues/{id}',
      path: {
        'locationId': locationId,
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
   * Delete Custom Value
   * Delete Custom Value
   * @returns CustomValueDeleteSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteCustomValue({
    authorization,
    version,
    locationId,
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
     * Location Id
     */
    locationId: string,
    /**
     * Custom Value Id
     */
    id: string,
  }): CancelablePromise<CustomValueDeleteSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/locations/{locationId}/customValues/{id}',
      path: {
        'locationId': locationId,
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
}
