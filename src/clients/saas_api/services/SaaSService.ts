/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkDisableSaasDto } from '../models/BulkDisableSaasDto';
import type { EnableSaasDto } from '../models/EnableSaasDto';
import type { PauseLocationDto } from '../models/PauseLocationDto';
import type { UpdateRebillingDto } from '../models/UpdateRebillingDto';
import type { UpdateSubscriptionDto } from '../models/UpdateSubscriptionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SaaSService {
  /**
   * Get locations by stripeId with companyId
   * Get locations by stripeCustomerId or stripeSubscriptionId with companyId
   * @returns any
   * @throws ApiError
   */
  public static locations({
    authorization,
    version,
    channel,
    source,
    customerId,
    subscriptionId,
    companyId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Api channel
     */
    channel: 'OAUTH',
    /**
     * Api source
     */
    source: 'INTEGRATION',
    customerId: string,
    subscriptionId: string,
    companyId: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/saas-api/public-api/locations',
      headers: {
        'Authorization': authorization,
        'Version': version,
        'channel': channel,
        'source': source,
      },
      query: {
        'customerId': customerId,
        'subscriptionId': subscriptionId,
        'companyId': companyId,
      },
    });
  }
  /**
   * Update SaaS subscription
   * Update SaaS subscription for given locationId and customerId
   * @returns any
   * @throws ApiError
   */
  public static generatePaymentLink({
    authorization,
    version,
    channel,
    source,
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
    version: '2021-04-15',
    /**
     * Api channel
     */
    channel: 'OAUTH',
    /**
     * Api source
     */
    source: 'INTEGRATION',
    locationId: string,
    requestBody: UpdateSubscriptionDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/saas-api/public-api/update-saas-subscription/{locationId}',
      path: {
        'locationId': locationId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
        'channel': channel,
        'source': source,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Disable SaaS for locations
   * Disable SaaS for locations for given locationIds
   * @returns any
   * @throws ApiError
   */
  public static bulkDisableSaas({
    authorization,
    version,
    channel,
    source,
    companyId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Api channel
     */
    channel: 'OAUTH',
    /**
     * Api source
     */
    source: 'INTEGRATION',
    companyId: string,
    requestBody: BulkDisableSaasDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/saas-api/public-api/bulk-disable-saas/{companyId}',
      path: {
        'companyId': companyId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
        'channel': channel,
        'source': source,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Enable SaaS for location
   * Enable SaaS for given locationIds
   * @returns any
   * @throws ApiError
   */
  public static enableSaas({
    authorization,
    version,
    channel,
    source,
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
    version: '2021-04-15',
    /**
     * Api channel
     */
    channel: 'OAUTH',
    /**
     * Api source
     */
    source: 'INTEGRATION',
    locationId: string,
    requestBody: EnableSaasDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/saas-api/public-api/enable-saas/{locationId}',
      path: {
        'locationId': locationId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
        'channel': channel,
        'source': source,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Pause location
   * Pause Sub account for given locationId
   * @returns any
   * @throws ApiError
   */
  public static pauseLocation({
    authorization,
    version,
    channel,
    source,
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
    version: '2021-04-15',
    /**
     * Api channel
     */
    channel: 'OAUTH',
    /**
     * Api source
     */
    source: 'INTEGRATION',
    locationId: string,
    requestBody: PauseLocationDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/saas-api/public-api/pause/{locationId}',
      path: {
        'locationId': locationId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
        'channel': channel,
        'source': source,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Update Rebilling
   * Bulk update rebilling for given locationIds
   * @returns any
   * @throws ApiError
   */
  public static updateRebilling({
    authorization,
    version,
    channel,
    source,
    companyId,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    /**
     * Api channel
     */
    channel: 'OAUTH',
    /**
     * Api source
     */
    source: 'INTEGRATION',
    companyId: string,
    requestBody: UpdateRebillingDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/saas-api/public-api/update-rebilling/{companyId}',
      path: {
        'companyId': companyId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
        'channel': channel,
        'source': source,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
