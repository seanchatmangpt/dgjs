/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactsBulkUpateResponse } from '../models/ContactsBulkUpateResponse';
import type { ContactsBusinessUpdate } from '../models/ContactsBusinessUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BulkService {
  /**
   * Add/Remove Contacts From Business
   * Add/Remove Contacts From Business
   * @returns ContactsBulkUpateResponse Successful response
   * @throws ApiError
   */
  public static addRemoveContactFromBusiness({
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
    requestBody: ContactsBusinessUpdate,
  }): CancelablePromise<ContactsBulkUpateResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contacts/bulk/business',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Unprocessable Entity`,
      },
    });
  }
}
