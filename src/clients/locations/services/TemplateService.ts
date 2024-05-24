/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetTemplatesSuccessfulResponseDto } from '../models/GetTemplatesSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TemplateService {
  /**
   * GET all or email/sms templates
   * GET all or email/sms templates
   * @returns GetTemplatesSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getAllOrEmailSmsTemplates({
    authorization,
    version,
    originId,
    locationId,
    deleted = false,
    skip = '0',
    limit = '25',
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
    /**
     * Origin Id
     */
    originId: string,
    /**
     * Location Id
     */
    locationId: string,
    deleted?: boolean,
    skip?: string,
    limit?: string,
    type?: 'sms' | 'email' | 'whatsapp',
  }): CancelablePromise<GetTemplatesSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/locations/{locationId}/templates',
      path: {
        'locationId': locationId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'deleted': deleted,
        'skip': skip,
        'limit': limit,
        'type': type,
        'originId': originId,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * DELETE an email/sms template
   * DELETE an email/sms template
   * @returns any
   * @throws ApiError
   */
  public static deleteAnEmailSmsTemplate({
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
     * Template Id
     */
    id: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/locations/{locationId}/templates/{id}',
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
}
