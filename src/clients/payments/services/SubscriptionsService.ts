/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetSubscriptionResponseSchema } from '../models/GetSubscriptionResponseSchema';
import type { ListSubscriptionResponseDto } from '../models/ListSubscriptionResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SubscriptionsService {
  /**
   * List Subscriptions
   * The "List Subscriptions" API allows to retrieve a paginated list of subscriptions. Customize your results by filtering subscriptions based on name, alt type, subscription status, payment mode, date range, type of source, contact, subscription id, entity id, contact or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve subscription information.
   * @returns ListSubscriptionResponseDto Successful response
   * @throws ApiError
   */
  public static listSubscriptions({
    authorization,
    version,
    altId,
    altType,
    entityId,
    paymentMode,
    startAt,
    endAt,
    entitySourceType,
    search,
    contactId,
    id,
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
    altType: 'location',
    /**
     * Entity id for filtering of subscriptions.
     */
    entityId?: string,
    /**
     * Mode of payment.
     */
    paymentMode?: string,
    /**
     * Starting interval of subscriptions.
     */
    startAt?: string,
    /**
     * Closing interval of subscriptions.
     */
    endAt?: string,
    /**
     * Source of the subscriptions.
     */
    entitySourceType?: string,
    /**
     * The name of the subscription for searching.
     */
    search?: string,
    /**
     * Contact ID for the subscription
     */
    contactId?: string,
    /**
     * Subscription id for filtering of subscriptions.
     */
    id?: string,
    /**
     * The maximum number of items to be included in a single page of results
     */
    limit?: number,
    /**
     * The starting index of the page, indicating the position from which the results should be retrieved.
     */
    offset?: number,
  }): CancelablePromise<ListSubscriptionResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/subscriptions',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'altId': altId,
        'altType': altType,
        'entityId': entityId,
        'paymentMode': paymentMode,
        'startAt': startAt,
        'endAt': endAt,
        'entitySourceType': entitySourceType,
        'search': search,
        'contactId': contactId,
        'id': id,
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
   * Get Subscription by ID
   * The "Get Subscription by ID" API allows to retrieve information for a specific subscription using its unique identifier. Use this endpoint to fetch details for a single subscription based on the provided subscription ID.
   * @returns GetSubscriptionResponseSchema Successful response
   * @throws ApiError
   */
  public static getSubscriptionById({
    authorization,
    version,
    subscriptionId,
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
     * ID of the subscription that needs to be returned
     */
    subscriptionId: string,
    /**
     * AltId is the unique identifier e.g: location id.
     */
    altId: string,
    /**
     * AltType is the type of identifier.
     */
    altType: 'location',
  }): CancelablePromise<GetSubscriptionResponseSchema> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/subscriptions/{subscriptionId}',
      path: {
        'subscriptionId': subscriptionId,
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
        400: `Subscription not found`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
