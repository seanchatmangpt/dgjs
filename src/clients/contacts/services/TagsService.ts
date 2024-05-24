/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAddTagSuccessfulResponseDto } from '../models/CreateAddTagSuccessfulResponseDto';
import type { CreateDeleteTagSuccessfulResponseDto } from '../models/CreateDeleteTagSuccessfulResponseDto';
import type { TagsDTO } from '../models/TagsDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagsService {
  /**
   * Add Tags
   * Add Tags
   * @returns CreateAddTagSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static addTags({
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
    requestBody: TagsDTO,
  }): CancelablePromise<CreateAddTagSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contacts/{contactId}/tags',
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
   * Remove Tags
   * Remove Tags
   * @returns CreateDeleteTagSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static removeTags({
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
    requestBody: TagsDTO,
  }): CancelablePromise<CreateDeleteTagSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contacts/{contactId}/tags',
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
