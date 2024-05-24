/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetCompanyByIdSuccessfulResponseDto } from '../models/GetCompanyByIdSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompaniesService {
  /**
   * Get Company
   * Get Comapny
   * @returns GetCompanyByIdSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getCompany({
    authorization,
    version,
    companyId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    companyId: string,
  }): CancelablePromise<GetCompanyByIdSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/companies/{companyId}',
      path: {
        'companyId': companyId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
