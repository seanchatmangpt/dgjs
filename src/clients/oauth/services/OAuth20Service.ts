/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetAccessCodebodyDto } from '../models/GetAccessCodebodyDto';
import type { GetAccessCodeSuccessfulResponseDto } from '../models/GetAccessCodeSuccessfulResponseDto';
import type { GetInstalledLocationsSuccessfulResponseDto } from '../models/GetInstalledLocationsSuccessfulResponseDto';
import type { GetLocationAccessCodeBodyDto } from '../models/GetLocationAccessCodeBodyDto';
import type { GetLocationAccessTokenSuccessfulResponseDto } from '../models/GetLocationAccessTokenSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OAuth20Service {
  /**
   * Get Access Token
   * Use Access Tokens to access GoHighLevel resources on behalf of an authenticated location/company.
   * @returns GetAccessCodeSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getAccessToken({
    formData,
  }: {
    formData: GetAccessCodebodyDto,
  }): CancelablePromise<GetAccessCodeSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/oauth/token',
      formData: formData,
      mediaType: 'application/x-www-form-urlencoded',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Get Location Access Token from Agency Token
   * This API allows you to generate locationAccessToken from AgencyAccessToken
   * @returns GetLocationAccessTokenSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getLocationAccessToken({
    version,
    formData,
  }: {
    /**
     * API Version
     */
    version: '2021-07-28',
    formData: GetLocationAccessCodeBodyDto,
  }): CancelablePromise<GetLocationAccessTokenSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/oauth/locationToken',
      headers: {
        'Version': version,
      },
      formData: formData,
      mediaType: 'application/x-www-form-urlencoded',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Get Location where app is installed
   * This API allows you fetch location where app is installed upon
   * @returns GetInstalledLocationsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getInstalledLocation({
    companyId,
    appId,
    version,
    skip = '0',
    limit = '20',
    query,
    isInstalled,
  }: {
    /**
     * Parameter to search by the companyId
     */
    companyId: string,
    /**
     * Parameter to search by the appId
     */
    appId: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    /**
     * Parameter to skip the number installed locations
     */
    skip?: string,
    /**
     * Parameter to limit the number installed locations
     */
    limit?: string,
    /**
     * Parameter to search for the installed location by name
     */
    query?: string,
    /**
     * Filters out location which are installed for specified app under the specified company
     */
    isInstalled?: boolean,
  }): CancelablePromise<GetInstalledLocationsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/oauth/installedLocations',
      headers: {
        'Version': version,
      },
      query: {
        'skip': skip,
        'limit': limit,
        'query': query,
        'isInstalled': isInstalled,
        'companyId': companyId,
        'appId': appId,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
