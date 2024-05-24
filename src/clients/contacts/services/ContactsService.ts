/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactsByIdSuccessfulResponseDto } from '../models/ContactsByIdSuccessfulResponseDto';
import type { ContactsSearchSuccessfulResponseDto } from '../models/ContactsSearchSuccessfulResponseDto';
import type { CreateContactDto } from '../models/CreateContactDto';
import type { CreateContactsSuccessfulResponseDto } from '../models/CreateContactsSuccessfulResponseDto';
import type { DeleteContactsSuccessfulResponseDto } from '../models/DeleteContactsSuccessfulResponseDto';
import type { UpdateContactDto } from '../models/UpdateContactDto';
import type { UpdateContactsSuccessfulResponseDto } from '../models/UpdateContactsSuccessfulResponseDto';
import type { UpsertContactDto } from '../models/UpsertContactDto';
import type { UpsertContactsSuccessfulResponseDto } from '../models/UpsertContactsSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContactsService {
  /**
   * Get Contact
   * Get Contact
   * @returns ContactsByIdSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getContact({
    authorization,
    version,
    contactId,
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
     * Contact Id
     */
    contactId: string,
  }): CancelablePromise<ContactsByIdSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contacts/{contactId}',
      path: {
        'contactId': contactId,
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
  /**
   * Update Contact
   * Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a>
   * @returns UpdateContactsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static updateContact({
    authorization,
    version,
    contactId,
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
     * Contact Id
     */
    contactId: string,
    requestBody: UpdateContactDto,
  }): CancelablePromise<UpdateContactsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/contacts/{contactId}',
      path: {
        'contactId': contactId,
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
   * Delete Contact
   * Delete Contact
   * @returns DeleteContactsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteContact({
    authorization,
    version,
    contactId,
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
     * Contact Id
     */
    contactId: string,
  }): CancelablePromise<DeleteContactsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contacts/{contactId}',
      path: {
        'contactId': contactId,
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
  /**
   * Upsert Contact
   * Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a><br><br>If `Allow Duplicate Contact` is disabled under Settings, the global unique identifier will be used for de-duplication. If the setting is enabled, a new contact will get created with the shared details.
   * @returns UpsertContactsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static upsertContact({
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
    requestBody: UpsertContactDto,
  }): CancelablePromise<UpsertContactsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contacts/upsert',
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
   * Get Contacts By BusinessId
   * Get Contacts By BusinessId
   * @returns ContactsSearchSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getContactsByBusinessId({
    authorization,
    version,
    businessId,
    locationId,
    limit = '25',
    skip = '0',
    query,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    businessId: string,
    locationId: string,
    limit?: string,
    skip?: string,
    query?: string,
  }): CancelablePromise<ContactsSearchSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contacts/business/{businessId}',
      path: {
        'businessId': businessId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'limit': limit,
        'locationId': locationId,
        'skip': skip,
        'query': query,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Create Contact
   * Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a>
   * @returns CreateContactsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static createContact({
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
    requestBody: CreateContactDto,
  }): CancelablePromise<CreateContactsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contacts/',
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
   * Get Contacts
   * Get Contacts
   * @returns ContactsSearchSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getContacts({
    authorization,
    version,
    locationId,
    startAfterId,
    startAfter,
    query,
    limit = 20,
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
     * Location Id
     */
    locationId: string,
    /**
     * Start After Id
     */
    startAfterId?: string,
    /**
     * Start Afte
     */
    startAfter?: number,
    /**
     * Contact Query
     */
    query?: string,
    /**
     * Limit Per Page records count. will allow maximum up to 100 and default will be 20
     */
    limit?: number,
  }): CancelablePromise<ContactsSearchSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contacts/',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'startAfterId': startAfterId,
        'startAfter': startAfter,
        'query': query,
        'limit': limit,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
}
