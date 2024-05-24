/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCalendarResourceDTO } from '../models/CreateCalendarResourceDTO';
import type { UpdateCalendarResourceDTO } from '../models/UpdateCalendarResourceDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CalendarResourcesRoomsEquipmentsService {
  /**
   * Get Calendar Resource
   * Get calendar resource by ID
   * @returns any Calendar resource fetched
   * @throws ApiError
   */
  public static getCalendarResource({
    authorization,
    version,
    resourceType,
    id,
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
     * Calendar Resource Type
     */
    resourceType: 'equipments' | 'rooms',
    /**
     * Calendar Resource ID
     */
    id: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/calendars/resources/{resourceType}/{id}',
      path: {
        'resourceType': resourceType,
        'id': id,
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
   * Update Calendar Resource
   * Update calendar resource by ID
   * @returns any Calendar resource updated
   * @throws ApiError
   */
  public static updateCalendarResource({
    authorization,
    version,
    resourceType,
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
    version: '2021-04-15',
    /**
     * Calendar Resource Type
     */
    resourceType: 'equipments' | 'rooms',
    /**
     * Calendar Resource ID
     */
    id: string,
    requestBody: UpdateCalendarResourceDTO,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/calendars/resources/{resourceType}/{id}',
      path: {
        'resourceType': resourceType,
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
      },
    });
  }
  /**
   * Delete Calendar Resource
   * Delete calendar resource by ID
   * @returns any Calendar resource deleted
   * @throws ApiError
   */
  public static deleteCalendarResource({
    authorization,
    version,
    resourceType,
    id,
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
     * Calendar Resource Type
     */
    resourceType: 'equipments' | 'rooms',
    /**
     * Calendar Resource ID
     */
    id: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/calendars/resources/{resourceType}/{id}',
      path: {
        'resourceType': resourceType,
        'id': id,
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
   * List Calendar Resources
   * List calendar resources by resource type and location ID
   * @returns any Calendar resources listed
   * @throws ApiError
   */
  public static fetchCalendarResources({
    authorization,
    version,
    resourceType,
    locationId,
    limit,
    skip,
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
     * Calendar Resource Type
     */
    resourceType: 'equipments' | 'rooms',
    locationId: string,
    limit: number,
    skip: number,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/calendars/resources/{resourceType}',
      path: {
        'resourceType': resourceType,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'limit': limit,
        'skip': skip,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Create Calendar Resource
   * Create calendar resource by resource type
   * @returns any Calendar resource created
   * @throws ApiError
   */
  public static createCalendarResource({
    authorization,
    version,
    resourceType,
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
     * Calendar Resource Type
     */
    resourceType: 'equipments' | 'rooms',
    requestBody: CreateCalendarResourceDTO,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/calendars/resources/{resourceType}',
      path: {
        'resourceType': resourceType,
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
