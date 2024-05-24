/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateInvoiceTemplateDto } from '../models/CreateInvoiceTemplateDto';
import type { CreateInvoiceTemplateResponseDto } from '../models/CreateInvoiceTemplateResponseDto';
import type { DeleteInvoiceTemplateResponseDto } from '../models/DeleteInvoiceTemplateResponseDto';
import type { GetTemplateResponseDto } from '../models/GetTemplateResponseDto';
import type { ListTemplatesResponseDto } from '../models/ListTemplatesResponseDto';
import type { UpdateInvoiceTemplateDto } from '../models/UpdateInvoiceTemplateDto';
import type { UpdateInvoiceTemplateResponseDto } from '../models/UpdateInvoiceTemplateResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TemplateService {
  /**
   * Create template
   * API to create a template
   * @returns CreateInvoiceTemplateResponseDto Successful response
   * @throws ApiError
   */
  public static createInvoiceTemplate({
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
    requestBody: CreateInvoiceTemplateDto,
  }): CancelablePromise<CreateInvoiceTemplateResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/invoices/template',
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
   * List templates
   * API to get list of templates
   * @returns ListTemplatesResponseDto Successful response
   * @throws ApiError
   */
  public static listInvoiceTemplates({
    authorization,
    version,
    altId,
    altType,
    limit,
    offset,
    status,
    startAt,
    endAt,
    search,
    paymentMode,
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
     * location Id / company Id based on altType
     */
    altId: string,
    /**
     * Alt Type
     */
    altType: 'location',
    /**
     * Limit the number of items to return
     */
    limit: string,
    /**
     * Number of items to skip
     */
    offset: string,
    /**
     * status to be filtered
     */
    status?: string,
    /**
     * startAt in YYYY-MM-DD format
     */
    startAt?: string,
    /**
     * endAt in YYYY-MM-DD format
     */
    endAt?: string,
    /**
     * To search for an invoice by id / name / email / phoneNo
     */
    search?: string,
    /**
     * payment mode
     */
    paymentMode?: 'default' | 'live',
  }): CancelablePromise<ListTemplatesResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoices/template',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'altId': altId,
        'altType': altType,
        'status': status,
        'startAt': startAt,
        'endAt': endAt,
        'search': search,
        'paymentMode': paymentMode,
        'limit': limit,
        'offset': offset,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Get an template
   * API to get an template by template id
   * @returns GetTemplateResponseDto Successful response
   * @throws ApiError
   */
  public static getInvoiceTemplate({
    authorization,
    version,
    templateId,
    altId,
    altType,
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
     * Template Id
     */
    templateId: string,
    /**
     * location Id / company Id based on altType
     */
    altId: string,
    /**
     * Alt Type
     */
    altType: 'location',
  }): CancelablePromise<GetTemplateResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoices/template/{templateId}',
      path: {
        'templateId': templateId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'altId': altId,
        'altType': altType,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Update template
   * API to update an template by template id
   * @returns UpdateInvoiceTemplateResponseDto Successful response
   * @throws ApiError
   */
  public static updateInvoiceTemplate({
    authorization,
    version,
    templateId,
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
     * Template Id
     */
    templateId: string,
    requestBody: UpdateInvoiceTemplateDto,
  }): CancelablePromise<UpdateInvoiceTemplateResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/invoices/template/{templateId}',
      path: {
        'templateId': templateId,
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
   * Delete template
   * API to update an template by template id
   * @returns DeleteInvoiceTemplateResponseDto Successful response
   * @throws ApiError
   */
  public static deleteInvoiceTemplate({
    authorization,
    version,
    templateId,
    altId,
    altType,
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
     * Template Id
     */
    templateId: string,
    /**
     * location Id / company Id based on altType
     */
    altId: string,
    /**
     * Alt Type
     */
    altType: 'location',
  }): CancelablePromise<DeleteInvoiceTemplateResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/invoices/template/{templateId}',
      path: {
        'templateId': templateId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'altId': altId,
        'altType': altType,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
