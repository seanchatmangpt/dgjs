/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateInvoiceDto } from '../models/CreateInvoiceDto';
import type { CreateInvoiceResponseDto } from '../models/CreateInvoiceResponseDto';
import type { DeleteInvoiceResponseDto } from '../models/DeleteInvoiceResponseDto';
import type { GenerateInvoiceNumberResponseDto } from '../models/GenerateInvoiceNumberResponseDto';
import type { GetInvoiceResponseDto } from '../models/GetInvoiceResponseDto';
import type { ListInvoicesResponseDto } from '../models/ListInvoicesResponseDto';
import type { RecordPaymentDto } from '../models/RecordPaymentDto';
import type { RecordPaymentResponseDto } from '../models/RecordPaymentResponseDto';
import type { SendInvoiceDto } from '../models/SendInvoiceDto';
import type { SendInvoicesResponseDto } from '../models/SendInvoicesResponseDto';
import type { UpdateInvoiceDto } from '../models/UpdateInvoiceDto';
import type { UpdateInvoiceResponseDto } from '../models/UpdateInvoiceResponseDto';
import type { VoidInvoiceDto } from '../models/VoidInvoiceDto';
import type { VoidInvoiceResponseDto } from '../models/VoidInvoiceResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InvoiceService {
  /**
   * Generate Invoice Number
   * Get the next invoice number for the given location
   * @returns GenerateInvoiceNumberResponseDto Successful response
   * @throws ApiError
   */
  public static generateInvoiceNumber({
    authorization,
    version,
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
     * Location Id
     */
    altId: string,
    altType: 'location',
  }): CancelablePromise<GenerateInvoiceNumberResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoices/generate-invoice-number',
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
   * Get invoice
   * API to get invoice by invoice id
   * @returns GetInvoiceResponseDto Successful response
   * @throws ApiError
   */
  public static getInvoice({
    authorization,
    version,
    invoiceId,
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
     * Invoice Id
     */
    invoiceId: string,
    /**
     * location Id / company Id based on altType
     */
    altId: string,
    /**
     * Alt Type
     */
    altType: 'location',
  }): CancelablePromise<GetInvoiceResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoices/{invoiceId}',
      path: {
        'invoiceId': invoiceId,
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
   * Update invoice
   * API to update invoice by invoice id
   * @returns UpdateInvoiceResponseDto Successful response
   * @throws ApiError
   */
  public static updateInvoice({
    authorization,
    version,
    invoiceId,
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
     * Invoice Id
     */
    invoiceId: string,
    requestBody: UpdateInvoiceDto,
  }): CancelablePromise<UpdateInvoiceResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/invoices/{invoiceId}',
      path: {
        'invoiceId': invoiceId,
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
   * Delete invoice
   * API to delete invoice by invoice id
   * @returns DeleteInvoiceResponseDto Successful response
   * @throws ApiError
   */
  public static deleteInvoice({
    authorization,
    version,
    invoiceId,
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
     * Invoice Id
     */
    invoiceId: string,
    /**
     * location Id / company Id based on altType
     */
    altId: string,
    /**
     * Alt Type
     */
    altType: 'location',
  }): CancelablePromise<DeleteInvoiceResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/invoices/{invoiceId}',
      path: {
        'invoiceId': invoiceId,
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
   * Void invoice
   * API to delete invoice by invoice id
   * @returns VoidInvoiceResponseDto Successful response
   * @throws ApiError
   */
  public static voidInvoice({
    authorization,
    version,
    invoiceId,
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
     * Invoice Id
     */
    invoiceId: string,
    requestBody: VoidInvoiceDto,
  }): CancelablePromise<VoidInvoiceResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/invoices/{invoiceId}/void',
      path: {
        'invoiceId': invoiceId,
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
   * Send invoice
   * API to send invoice by invoice id
   * @returns SendInvoicesResponseDto Successful response
   * @throws ApiError
   */
  public static sendInvoice({
    authorization,
    version,
    invoiceId,
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
     * Invoice Id
     */
    invoiceId: string,
    requestBody: SendInvoiceDto,
  }): CancelablePromise<SendInvoicesResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/invoices/{invoiceId}/send',
      path: {
        'invoiceId': invoiceId,
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
   * Record a manual payment for an invoice
   * API to record manual payment for an invoice by invoice id
   * @returns RecordPaymentResponseDto Successful response
   * @throws ApiError
   */
  public static recordInvoice({
    authorization,
    version,
    invoiceId,
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
     * Invoice Id
     */
    invoiceId: string,
    requestBody: RecordPaymentDto,
  }): CancelablePromise<RecordPaymentResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/invoices/{invoiceId}/record-payment',
      path: {
        'invoiceId': invoiceId,
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
   * Create Invoice
   * API to create an invoice
   * @returns CreateInvoiceResponseDto Successful response
   * @throws ApiError
   */
  public static createInvoice({
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
    requestBody: CreateInvoiceDto,
  }): CancelablePromise<CreateInvoiceResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/invoices/',
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
   * List invoices
   * API to get list of invoices
   * @returns ListInvoicesResponseDto Successful response
   * @throws ApiError
   */
  public static listInvoices({
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
    contactId,
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
    /**
     * Contact ID for the invoice
     */
    contactId?: string,
  }): CancelablePromise<ListInvoicesResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoices/',
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
        'contactId': contactId,
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
}
