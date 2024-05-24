/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAddFollowersSuccessfulResponseDto } from '../models/CreateAddFollowersSuccessfulResponseDto';
import type { DeleteFollowersSuccessfulResponseDto } from '../models/DeleteFollowersSuccessfulResponseDto';
import type { FollowersDTO } from '../models/FollowersDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FollowersService {
  /**
   * Add Followers
   * Add Followers
   * @returns CreateAddFollowersSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static addFollowersContact({
    authorization,
    version,
    contactId,
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
     * Contact Id
     */
    contactId: string,
    requestBody: FollowersDTO,
  }): CancelablePromise<CreateAddFollowersSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contacts/{contactId}/followers',
      path: {
        'contactId': contactId,
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
   * Remove Followers
   * Remove Followers
   * @returns DeleteFollowersSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static removeFollowersContact({
    authorization,
    version,
    contactId,
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
     * Contact Id
     */
    contactId: string,
    requestBody: FollowersDTO,
  }): CancelablePromise<DeleteFollowersSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contacts/{contactId}/followers',
      path: {
        'contactId': contactId,
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
}
