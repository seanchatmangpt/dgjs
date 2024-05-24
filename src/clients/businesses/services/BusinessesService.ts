/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBusinessDto } from '../models/CreateBusinessDto';
import type { DeleteBusinessResponseDto } from '../models/DeleteBusinessResponseDto';
import type { GetBusinessByIdResponseDto } from '../models/GetBusinessByIdResponseDto';
import type { GetBusinessByLocationResponseDto } from '../models/GetBusinessByLocationResponseDto';
import type { UpdateBusinessDto } from '../models/UpdateBusinessDto';
import type { UpdateBusinessResponseDto } from '../models/UpdateBusinessResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BusinessesService {
  /**
   * Update Business
   * Update Business
   * @returns UpdateBusinessResponseDto Successful response
   * @throws ApiError
   */
  public static updateBusiness({
    authorization,
    version,
    businessId,
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
    businessId: string,
    requestBody: UpdateBusinessDto,
  }): CancelablePromise<UpdateBusinessResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/businesses/{businessId}',
      path: {
        'businessId': businessId,
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
   * Delete Business
   * Delete Business
   * @returns DeleteBusinessResponseDto Successful response
   * @throws ApiError
   */
  public static deleteBusiness({
    authorization,
    version,
    businessId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * Api Version
     */
    version: string,
    businessId: string,
  }): CancelablePromise<DeleteBusinessResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/businesses/{businessId}',
      path: {
        'businessId': businessId,
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
   * Get Business
   * Get Business
   * @returns GetBusinessByIdResponseDto Successful response
   * @throws ApiError
   */
  public static getBusiness({
    authorization,
    version,
    businessId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * Api Version
     */
    version: string,
    businessId: string,
  }): CancelablePromise<GetBusinessByIdResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/businesses/{businessId}',
      path: {
        'businessId': businessId,
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
   * Get Businesses by Location
   * Get Businesses by Location
   * @returns GetBusinessByLocationResponseDto Successful response
   * @throws ApiError
   */
  public static getBusinessesByLocation({
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
  }): CancelablePromise<GetBusinessByLocationResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/businesses/',
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
   * Create Business
   * Create Business
   * @returns UpdateBusinessResponseDto Successful response
   * @throws ApiError
   */
  public static createBusiness({
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
    requestBody: CreateBusinessDto,
  }): CancelablePromise<UpdateBusinessResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/businesses/',
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
