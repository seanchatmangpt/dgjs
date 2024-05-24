/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { DeleteUserSuccessfulResponseDto } from '../models/DeleteUserSuccessfulResponseDto';
import type { LocationSuccessfulResponseDto } from '../models/LocationSuccessfulResponseDto';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { UserSuccessfulResponseDto } from '../models/UserSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
  /**
   * Get User
   * Get User
   * @returns UserSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getUser({
    authorization,
    version,
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
     * User Id
     */
    userId: string,
  }): CancelablePromise<UserSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{userId}',
      path: {
        'userId': userId,
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
   * Update User
   * Update User
   * @returns UserSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static updateUser({
    authorization,
    version,
    userId,
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
     * User Id
     */
    userId: string,
    requestBody: UpdateUserDto,
  }): CancelablePromise<UserSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/users/{userId}',
      path: {
        'userId': userId,
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
   * Delete User
   * Delete User
   * @returns DeleteUserSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteUser({
    authorization,
    version,
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
     * User Id
     */
    userId: string,
  }): CancelablePromise<DeleteUserSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/users/{userId}',
      path: {
        'userId': userId,
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
   * Get User by Location
   * Get User by Location
   * @returns LocationSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getUserByLocation({
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
    locationId: string,
  }): CancelablePromise<LocationSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/',
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
   * Create User
   * Create User
   * @returns UserSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static createUser({
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
    requestBody: CreateUserDto,
  }): CancelablePromise<UserSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/users/',
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
