/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePriceDto } from '../models/CreatePriceDto';
import type { CreatePriceResponseDto } from '../models/CreatePriceResponseDto';
import type { DeletePriceResponseDto } from '../models/DeletePriceResponseDto';
import type { GetPriceResponseDto } from '../models/GetPriceResponseDto';
import type { ListPricesResponseDto } from '../models/ListPricesResponseDto';
import type { UpdatePriceDto } from '../models/UpdatePriceDto';
import type { UpdatePriceResponseDto } from '../models/UpdatePriceResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PricesService {
  /**
   * Create Price for a Product
   * The "Create Price for a Product" API allows adding a new price associated with a specific product to the system. Use this endpoint to create a price with the specified details for a particular product. Ensure that the required information is provided in the request payload.
   * @returns CreatePriceResponseDto Successful response
   * @throws ApiError
   */
  public static createPriceForProduct({
    authorization,
    version,
    productId,
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
     * ID of the product that needs to be used
     */
    productId: string,
    requestBody: CreatePriceDto,
  }): CancelablePromise<CreatePriceResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/products/{productId}/price',
      path: {
        'productId': productId,
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
   * List Prices for a Product
   * The "List Prices for a Product" API allows retrieving a paginated list of prices associated with a specific product. Customize your results by filtering prices or paginate through the list using the provided query parameters.
   * @returns ListPricesResponseDto Successful response
   * @throws ApiError
   */
  public static listPricesForProduct({
    authorization,
    version,
    productId,
    locationId,
    limit,
    offset,
    ids,
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
     * ID of the product that needs to be used
     */
    productId: string,
    /**
     * The unique identifier for the location.
     */
    locationId: string,
    /**
     * The maximum number of items to be included in a single page of results
     */
    limit?: number,
    /**
     * The starting index of the page, indicating the position from which the results should be retrieved.
     */
    offset?: number,
    /**
     * To filter the response only with the given price ids, Please provide with comma separated
     */
    ids?: string,
  }): CancelablePromise<ListPricesResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/products/{productId}/price',
      path: {
        'productId': productId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'limit': limit,
        'offset': offset,
        'locationId': locationId,
        'ids': ids,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Get Price by ID for a Product
   * The "Get Price by ID for a Product" API allows retrieving information for a specific price associated with a particular product using its unique identifier. Use this endpoint to fetch details for a single price based on the provided price ID and product ID.
   * @returns GetPriceResponseDto Successful response
   * @throws ApiError
   */
  public static getPriceByIdForProduct({
    authorization,
    version,
    productId,
    priceId,
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
     * ID of the product that needs to be used
     */
    productId: string,
    /**
     * ID of the price that needs to be returned
     */
    priceId: string,
    /**
     * location Id
     */
    locationId: string,
  }): CancelablePromise<GetPriceResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/products/{productId}/price/{priceId}',
      path: {
        'productId': productId,
        'priceId': priceId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Update Price by ID for a Product
   * The "Update Price by ID for a Product" API allows modifying information for a specific price associated with a particular product using its unique identifier. Use this endpoint to update details for a single price based on the provided price ID and product ID.
   * @returns UpdatePriceResponseDto Successful response
   * @throws ApiError
   */
  public static updatePriceByIdForProduct({
    authorization,
    version,
    productId,
    priceId,
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
     * ID of the product that needs to be used
     */
    productId: string,
    /**
     * ID of the price that needs to be returned
     */
    priceId: string,
    requestBody: UpdatePriceDto,
  }): CancelablePromise<UpdatePriceResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/products/{productId}/price/{priceId}',
      path: {
        'productId': productId,
        'priceId': priceId,
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
   * Delete Price by ID for a Product
   * The "Delete Price by ID for a Product" API allows deleting a specific price associated with a particular product using its unique identifier. Use this endpoint to remove a price from the system.
   * @returns DeletePriceResponseDto Successful response
   * @throws ApiError
   */
  public static deletePriceByIdForProduct({
    authorization,
    version,
    productId,
    priceId,
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
     * ID of the product that needs to be used
     */
    productId: string,
    /**
     * ID of the price that needs to be returned
     */
    priceId: string,
    /**
     * location Id
     */
    locationId: string,
  }): CancelablePromise<DeletePriceResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/products/{productId}/price/{priceId}',
      path: {
        'productId': productId,
        'priceId': priceId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
