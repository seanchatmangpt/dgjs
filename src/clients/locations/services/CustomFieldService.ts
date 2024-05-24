/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCustomFieldsDTO } from '../models/CreateCustomFieldsDTO';
import type { CustomFieldDeleteSuccessfulResponseDto } from '../models/CustomFieldDeleteSuccessfulResponseDto';
import type { CustomFieldsListSuccessfulResponseDto } from '../models/CustomFieldsListSuccessfulResponseDto';
import type { CustomFieldSuccessfulResponseDto } from '../models/CustomFieldSuccessfulResponseDto';
import type { FileUploadBody } from '../models/FileUploadBody';
import type { FileUploadResponseDto } from '../models/FileUploadResponseDto';
import type { UpdateCustomFieldsDTO } from '../models/UpdateCustomFieldsDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomFieldService {
  /**
   * Get Custom Fields
   * Get Custom Fields
   * @returns CustomFieldsListSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getCustomFields({
    authorization,
    version,
    locationId,
    model,
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
     * Model of the custom field you want to retrieve
     */
    model?: 'contact' | 'opportunity' | 'all',
  }): CancelablePromise<CustomFieldsListSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/locations/{locationId}/customFields',
      path: {
        'locationId': locationId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'model': model,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Create Custom Field
   * Create Custom Field
   * @returns CustomFieldSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static createCustomField({
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
    requestBody: CreateCustomFieldsDTO,
  }): CancelablePromise<CustomFieldSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/locations/{locationId}/customFields',
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
   * Get Custom Field
   * Get Custom Field
   * @returns CustomFieldSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getCustomField({
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
     * Custom Field Id
     */
    id: string,
  }): CancelablePromise<CustomFieldSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/locations/{locationId}/customFields/{id}',
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
   * Update Custom Field
   * Update Custom Field
   * @returns CustomFieldSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static updateCustomField({
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
     * Custom Field Id
     */
    id: string,
    requestBody: UpdateCustomFieldsDTO,
  }): CancelablePromise<CustomFieldSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/locations/{locationId}/customFields/{id}',
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
   * Delete Custom Field
   * Delete Custom Field
   * @returns CustomFieldDeleteSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteCustomField({
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
     * Custom Field Id
     */
    id: string,
  }): CancelablePromise<CustomFieldDeleteSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/locations/{locationId}/customFields/{id}',
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
   * Uploads File to customFields
   * Uploads File to customFields
   * @returns FileUploadResponseDto Successful response
   * @throws ApiError
   */
  public static uploadFileCustomFields({
    authorization,
    version,
    locationId,
    formData,
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
    formData: FileUploadBody,
  }): CancelablePromise<FileUploadResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/locations/{locationId}/customFields/upload',
      path: {
        'locationId': locationId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
