/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupCreateSuccessfulResponseDTO } from '../models/GroupCreateSuccessfulResponseDTO';
import type { GroupDTO } from '../models/GroupDTO';
import type { GroupsGetSuccessfulResponseDTO } from '../models/GroupsGetSuccessfulResponseDTO';
import type { GroupStatusUpdateParams } from '../models/GroupStatusUpdateParams';
import type { GroupSuccessfulResponseDTO } from '../models/GroupSuccessfulResponseDTO';
import type { GroupUpdateDTO } from '../models/GroupUpdateDTO';
import type { ValidateGroupSlugPostBody } from '../models/ValidateGroupSlugPostBody';
import type { ValidateGroupSlugSuccessResponseDTO } from '../models/ValidateGroupSlugSuccessResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CalendarGroupsService {
  /**
   * Get Groups
   * Get all calendar groups in a location.
   * @returns GroupsGetSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static getGroups({
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
    version: '2021-04-15',
    /**
     * Location Id
     */
    locationId: string,
  }): CancelablePromise<GroupsGetSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/calendars/groups',
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
   * Create Calendar Group
   * Create Calendar Group
   * @returns GroupCreateSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static createCalendarGroup({
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
    version: '2021-04-15',
    requestBody: GroupDTO,
  }): CancelablePromise<GroupCreateSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/calendars/groups',
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
   * Validate group slug
   * Validate if group slug is available or not.
   * @returns ValidateGroupSlugSuccessResponseDTO Successful response
   * @throws ApiError
   */
  public static validateGroupsSlug({
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
    version: '2021-04-15',
    requestBody: ValidateGroupSlugPostBody,
  }): CancelablePromise<ValidateGroupSlugSuccessResponseDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/calendars/groups/validate-slug',
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
   * Delete Group
   * Delete Group
   * @returns GroupSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static deleteGroup({
    authorization,
    version,
    groupId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Group Id
     */
    groupId: string,
  }): CancelablePromise<GroupSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/calendars/groups/{groupId}',
      path: {
        'groupId': groupId,
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
   * Edit Group
   * Edit Group
   * @returns GroupCreateSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static editGroup({
    authorization,
    version,
    groupId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Group Id
     */
    groupId: string,
    requestBody: GroupUpdateDTO,
  }): CancelablePromise<GroupCreateSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/calendars/groups/{groupId}',
      path: {
        'groupId': groupId,
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
   * Disable Group
   * Disable Group
   * @returns GroupSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static disableGroup({
    authorization,
    version,
    groupId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Group Id
     */
    groupId: string,
    requestBody: GroupStatusUpdateParams,
  }): CancelablePromise<GroupSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/calendars/groups/{groupId}/status',
      path: {
        'groupId': groupId,
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
}
