/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Text2PayDto } from '../models/Text2PayDto';
import type { Text2PayInvoiceResponseDto } from '../models/Text2PayInvoiceResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class Text2PayService {
  /**
   * Create & Send
   * API to create or update a text2pay invoice
   * @returns Text2PayInvoiceResponseDto Successful response
   * @throws ApiError
   */
  public static text2PayInvoice({
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
    requestBody: Text2PayDto,
  }): CancelablePromise<Text2PayInvoiceResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/invoices/text2pay',
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
