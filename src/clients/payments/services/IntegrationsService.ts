/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWhiteLabelIntegrationProviderDto } from '../models/CreateWhiteLabelIntegrationProviderDto';
import type { CreateWhitelabelIntegrationResponseDto } from '../models/CreateWhitelabelIntegrationResponseDto';
import type { ListWhitelabelIntegrationProviderResponseDto } from '../models/ListWhitelabelIntegrationProviderResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IntegrationsService {
  /**
   * Create White-label Integration Provider
   * The "Create White-label Integration Provider" API allows adding a new payment provider integration to the system which is built on top of Authorize.net or NMI. Use this endpoint to create a integration provider with the specified details. Ensure that the required information is provided in the request payload. This endpoint can be only invoked using marketplace-app token
   * @returns CreateWhitelabelIntegrationResponseDto Successful response
   * @throws ApiError
   */
  public static createIntegrationProvider({
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
    requestBody: CreateWhiteLabelIntegrationProviderDto,
  }): CancelablePromise<CreateWhitelabelIntegrationResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payments/integrations/provider/whitelabel',
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
   * List White-label Integration Providers
   * The "List White-label Integration Providers" API allows to retrieve a paginated list of integration providers. Customize your results by filtering whitelabel integration providers(which are built directly on top of Authorize.net or NMI) based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve integration provider information.
   * @returns ListWhitelabelIntegrationProviderResponseDto Successful response
   * @throws ApiError
   */
  public static listIntegrationProviders({
    authorization,
    version,
    altId,
    altType,
    limit,
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
     * location Id / company Id based on altType
     */
    altId: string,
    /**
     * Alt Type
     */
    altType: 'location',
    /**
     * The maximum number of items to be included in a single page of results
     */
    limit?: number,
    /**
     * The starting index of the page, indicating the position from which the results should be retrieved.
     */
    offset?: number,
  }): CancelablePromise<ListWhitelabelIntegrationProviderResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/integrations/provider/whitelabel',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'altId': altId,
        'altType': altType,
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
