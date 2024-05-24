/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetTxnResponseSchema } from '../models/GetTxnResponseSchema';
import type { ListTxnsResponseDto } from '../models/ListTxnsResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TransactionsService {
  /**
   * List Transactions
   * The "List Transactions" API allows to retrieve a paginated list of transactions. Customize your results by filtering transactions based on name, alt type, transaction status, payment mode, date range, type of source, contact, subscription id, entity id or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve transaction information.
   * @returns ListTxnsResponseDto Successful response
   * @throws ApiError
   */
  public static listTransactions({
    authorization,
    version,
    altId,
    altType,
    locationId,
    paymentMode,
    startAt,
    endAt,
    entitySourceType,
    entitySourceSubType,
    search,
    subscriptionId,
    entityId,
    contactId,
    limit = 10,
    offset,
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
     * AltId is the unique identifier e.g: location id.
     */
    altId: string,
    /**
     * AltType is the type of identifier.
     */
    altType: string,
    /**
     * LocationId is the id of the sub-account.
     */
    locationId?: string,
    /**
     * Mode of payment.
     */
    paymentMode?: string,
    /**
     * Starting interval of transactions.
     */
    startAt?: string,
    /**
     * Closing interval of transactions.
     */
    endAt?: string,
    /**
     * Source of the transactions.
     */
    entitySourceType?: string,
    /**
     * Source sub-type of the transactions.
     */
    entitySourceSubType?: string,
    /**
     * The name of the transaction for searching.
     */
    search?: string,
    /**
     * Subscription id for filtering of transactions.
     */
    subscriptionId?: string,
    /**
     * Entity id for filtering of transactions.
     */
    entityId?: string,
    /**
     * Contact id for filtering of transactions.
     */
    contactId?: string,
    /**
     * The maximum number of items to be included in a single page of results
     */
    limit?: number,
    /**
     * The starting index of the page, indicating the position from which the results should be retrieved.
     */
    offset?: number,
  }): CancelablePromise<ListTxnsResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/transactions',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'altId': altId,
        'altType': altType,
        'paymentMode': paymentMode,
        'startAt': startAt,
        'endAt': endAt,
        'entitySourceType': entitySourceType,
        'entitySourceSubType': entitySourceSubType,
        'search': search,
        'subscriptionId': subscriptionId,
        'entityId': entityId,
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
  /**
   * Get Transaction by ID
   * The "Get Transaction by ID" API allows to retrieve information for a specific transaction using its unique identifier. Use this endpoint to fetch details for a single transaction based on the provided transaction ID.
   * @returns GetTxnResponseSchema Successful response
   * @throws ApiError
   */
  public static getTransactionById({
    authorization,
    version,
    transactionId,
    altId,
    altType,
    locationId,
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
     * ID of the transaction that needs to be returned
     */
    transactionId: string,
    /**
     * AltId is the unique identifier e.g: location id.
     */
    altId: string,
    /**
     * AltType is the type of identifier.
     */
    altType: string,
    /**
     * LocationId is the id of the sub-account.
     */
    locationId?: string,
  }): CancelablePromise<GetTxnResponseSchema> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/transactions/{transactionId}',
      path: {
        'transactionId': transactionId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'altId': altId,
        'altType': altType,
      },
      errors: {
        400: `Transaction not found`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
