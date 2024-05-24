/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductDto } from '../models/CreateProductDto';
import type { CreateProductResponseDto } from '../models/CreateProductResponseDto';
import type { DeleteProductResponseDto } from '../models/DeleteProductResponseDto';
import type { GetProductResponseDto } from '../models/GetProductResponseDto';
import type { ListProductsResponseDto } from '../models/ListProductsResponseDto';
import type { UpdateProductDto } from '../models/UpdateProductDto';
import type { UpdateProductResponseDto } from '../models/UpdateProductResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
  /**
   * Get Product by ID
   * The "Get Product by ID" API allows to retrieve information for a specific product using its unique identifier. Use this endpoint to fetch details for a single product based on the provided product ID.
   * @returns GetProductResponseDto Successful response
   * @throws ApiError
   */
  public static getProductById({
    authorization,
    version,
    productId,
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
     * ID of the product that needs to be returned
     */
    productId: string,
    /**
     * location Id
     */
    locationId: string,
  }): CancelablePromise<GetProductResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/products/{productId}',
      path: {
        'productId': productId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
      },
      errors: {
        400: `Product not found`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Delete Product by ID
   * The "Delete Product by ID" API allows deleting a specific product using its unique identifier. Use this endpoint to remove a product from the system.
   * @returns DeleteProductResponseDto Successful response
   * @throws ApiError
   */
  public static deleteProductById({
    authorization,
    version,
    productId,
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
     * ID of the product that needs to be returned
     */
    productId: string,
    /**
     * location Id
     */
    locationId: string,
  }): CancelablePromise<DeleteProductResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/products/{productId}',
      path: {
        'productId': productId,
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
   * Update Product by ID
   * The "Update Product by ID" API allows modifying information for a specific product using its unique identifier. Use this endpoint to update details for a single product based on the provided product ID.
   * @returns UpdateProductResponseDto Successful response
   * @throws ApiError
   */
  public static updateProductById({
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
     * ID of the product that needs to be returned
     */
    productId: string,
    requestBody: UpdateProductDto,
  }): CancelablePromise<UpdateProductResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/products/{productId}',
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
   * Create Product
   * The "Create Product" API allows adding a new product to the system. Use this endpoint to create a product with the specified details. Ensure that the required information is provided in the request payload.
   * @returns CreateProductResponseDto Successful response
   * @throws ApiError
   */
  public static createProduct({
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
    requestBody: CreateProductDto,
  }): CancelablePromise<CreateProductResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/products/',
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
   * List Products
   * The "List Products" API allows to retrieve a paginated list of products. Customize your results by filtering products based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve product information.
   * @returns ListProductsResponseDto Successful response
   * @throws ApiError
   */
  public static listInvoices({
    authorization,
    version,
    locationId,
    limit,
    offset,
    search,
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
     * LocationId is the id of the sub-account
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
     * The name of the product for searching.
     */
    search?: string,
  }): CancelablePromise<ListProductsResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/products/',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'limit': limit,
        'offset': offset,
        'locationId': locationId,
        'search': search,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
