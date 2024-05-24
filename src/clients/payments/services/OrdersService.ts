/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetOrderResponseSchema } from '../models/GetOrderResponseSchema';
import type { ListOrdersResponseDto } from '../models/ListOrdersResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
  /**
   * List Orders
   * The "List Orders" API allows to retrieve a paginated list of orders. Customize your results by filtering orders based on name, alt type, order status, payment mode, date range, type of source, contact, funnel products or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve order information.
   * @returns ListOrdersResponseDto Successful response
   * @throws ApiError
   */
  public static listOrders({
    authorization,
    version,
    altId,
    altType,
    locationId,
    status,
    paymentMode,
    startAt,
    endAt,
    search,
    contactId,
    funnelProductIds,
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
     * Order status.
     */
    status?: string,
    /**
     * Mode of payment.
     */
    paymentMode?: string,
    /**
     * Starting interval of orders.
     */
    startAt?: string,
    /**
     * Closing interval of orders.
     */
    endAt?: string,
    /**
     * The name of the order for searching.
     */
    search?: string,
    /**
     * Contact id for filtering of orders.
     */
    contactId?: string,
    /**
     * Funnel product ids separated by comma.
     */
    funnelProductIds?: string,
    /**
     * The maximum number of items to be included in a single page of results
     */
    limit?: number,
    /**
     * The starting index of the page, indicating the position from which the results should be retrieved.
     */
    offset?: number,
  }): CancelablePromise<ListOrdersResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/orders',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'altId': altId,
        'altType': altType,
        'status': status,
        'paymentMode': paymentMode,
        'startAt': startAt,
        'endAt': endAt,
        'search': search,
        'contactId': contactId,
        'funnelProductIds': funnelProductIds,
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
   * Get Order by ID
   * The "Get Order by ID" API allows to retrieve information for a specific order using its unique identifier. Use this endpoint to fetch details for a single order based on the provided order ID.
   * @returns GetOrderResponseSchema Successful response
   * @throws ApiError
   */
  public static getOrderById({
    authorization,
    version,
    orderId,
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
     * ID of the order that needs to be returned
     */
    orderId: string,
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
  }): CancelablePromise<GetOrderResponseSchema> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/orders/{orderId}',
      path: {
        'orderId': orderId,
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
        400: `Order not found`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
