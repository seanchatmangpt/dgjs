/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFulfillmentDto } from '../models/CreateFulfillmentDto';
import type { CreateFulfillmentResponseDto } from '../models/CreateFulfillmentResponseDto';
import type { ListFulfillmentResponseDto } from '../models/ListFulfillmentResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrderFulfillmentsService {
  /**
   * Create order fulfillment
   * The "Order Fulfillment" API facilitates the process of fulfilling an order.
   * @returns CreateFulfillmentResponseDto Successful response
   * @throws ApiError
   */
  public static createOrderFulfillment({
    authorization,
    version,
    orderId,
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
     * ID of the order that needs to be returned
     */
    orderId: string,
    requestBody: CreateFulfillmentDto,
  }): CancelablePromise<CreateFulfillmentResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payments/orders/{orderId}/fulfillments',
      path: {
        'orderId': orderId,
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
   * List fulfillment
   * List all fulfillment history of an order
   * @returns ListFulfillmentResponseDto Successful response
   * @throws ApiError
   */
  public static listOrderFulfillment({
    authorization,
    version,
    altId,
    altType,
    orderId,
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
     * Location Id or Agency Id
     */
    altId: string,
    altType: 'location',
    /**
     * ID of the order that needs to be returned
     */
    orderId: string,
  }): CancelablePromise<ListFulfillmentResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/orders/{orderId}/fulfillments',
      path: {
        'orderId': orderId,
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
