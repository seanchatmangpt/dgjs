/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateLocationDto } from '../models/CreateLocationDto';
import type { CreateLocationSuccessfulResponseDto } from '../models/CreateLocationSuccessfulResponseDto';
import type { GetLocationByIdSuccessfulResponseDto } from '../models/GetLocationByIdSuccessfulResponseDto';
import type { LocationDeletedSuccessfulResponseDto } from '../models/LocationDeletedSuccessfulResponseDto';
import type { UpdateLocationDto } from '../models/UpdateLocationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LocationService {
  /**
   * Get Location
   * Get details of a location by passing the location id
   * @returns GetLocationByIdSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getLocation({
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
  }): CancelablePromise<GetLocationByIdSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/locations/{locationId}',
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
   * Put Location
   * Update a location/sub-account based on the data provided
   * @returns CreateLocationSuccessfulResponseDto Successful update response
   * @throws ApiError
   */
  public static putLocation({
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
    requestBody: UpdateLocationDto,
  }): CancelablePromise<CreateLocationSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/locations/{locationId}',
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
      },
    });
  }
  /**
   * Delete Location
   * Delete a location/sub-account from the company
   * @returns LocationDeletedSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteLocation({
    authorization,
    version,
    locationId,
    deleteTwilioAccount,
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
     * Boolean value to indicate whether to delete Twilio Account or not
     */
    deleteTwilioAccount: boolean,
  }): CancelablePromise<LocationDeletedSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/locations/{locationId}',
      path: {
        'locationId': locationId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'deleteTwilioAccount': deleteTwilioAccount,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Create Location
   * Create a new location/sub-account based on the data provided
   * @returns CreateLocationSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static createLocation({
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
    requestBody: CreateLocationDto,
  }): CancelablePromise<CreateLocationSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/locations/',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
}
