/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormsSubmissionsSuccessfulResponseDto } from '../models/FormsSubmissionsSuccessfulResponseDto';
import type { FormsSuccessfulResponseDto } from '../models/FormsSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FormsService {
  /**
   * Get Forms Submissions
   * Get Forms Submissions
   * @returns FormsSubmissionsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getFormsSubmissions({
    authorization,
    version,
    locationId,
    page = 1,
    limit = 20,
    formId,
    q,
    startAt,
    endAt,
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
    /**
     * Page No. By default it will be 1
     */
    page?: number,
    /**
     * Limit Per Page records count. will allow maximum up to 100 and default will be 20
     */
    limit?: number,
    /**
     * Filter submission by form id
     */
    formId?: string,
    /**
     * Filter by contactId, name, email or phone no.
     */
    q?: string,
    /**
     * Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD).
     */
    startAt?: string,
    /**
     * Get submission by ending of this date. By default it will be current date(YYYY-MM-DD).
     */
    endAt?: string,
  }): CancelablePromise<FormsSubmissionsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/forms/submissions',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'page': page,
        'limit': limit,
        'formId': formId,
        'q': q,
        'startAt': startAt,
        'endAt': endAt,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Upload files to custom fields
   * Post the necessary fields for the API to upload files. The files need to be a buffer with the key "< custom_field_id >_< file_id >". <br /> Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid) <br /> There is support for multiple file uploads as well. Have multiple fields in the format mentioned.<br />File size is limited to 50 MB.<br /><br /> The allowed file types are: <br> <ul><li>PDF</li><li>DOCX</li><li>DOC</li><li>JPG</li><li>JPEG</li><li>PNG</li><li>GIF</li><li>CSV</li><li>XLSX</li><li>XLS</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>TXT</li><li>SVG</li></ul> <br /><br /> The API will return the updated contact object.
   * @returns any Successful response
   * @throws ApiError
   */
  public static uploadToCustomFields({
    authorization,
    version,
    contactId,
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
    /**
     * Contact ID to upload the file to.
     */
    contactId: string,
    /**
     * Location ID of the contact.
     */
    locationId: string,
    formData: any,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/forms/upload-custom-files',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'contactId': contactId,
        'locationId': locationId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Get Forms
   * Get Forms
   * @returns FormsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getForms({
    authorization,
    version,
    locationId,
    skip,
    limit = 10,
    type,
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
    skip?: number,
    /**
     * Limit Per Page records count. will allow maximum up to 50 and default will be 10
     */
    limit?: number,
    type?: string,
  }): CancelablePromise<FormsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/forms/',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'skip': skip,
        'limit': limit,
        'type': type,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
}
