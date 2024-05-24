/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteNoteSuccessfulResponseDto } from '../models/DeleteNoteSuccessfulResponseDto';
import type { GetCreateUpdateNoteSuccessfulResponseDto } from '../models/GetCreateUpdateNoteSuccessfulResponseDto';
import type { GetNotesListSuccessfulResponseDto } from '../models/GetNotesListSuccessfulResponseDto';
import type { NotesDTO } from '../models/NotesDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotesService {
  /**
   * Get All Notes
   * Get All Notes
   * @returns GetNotesListSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getAllNotes({
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
  }): CancelablePromise<GetNotesListSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contacts/{contactId}/notes',
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
      },
    });
  }
  /**
   * Create Note
   * Create Note
   * @returns GetCreateUpdateNoteSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static createNote({
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
    requestBody: NotesDTO,
  }): CancelablePromise<GetCreateUpdateNoteSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contacts/{contactId}/notes',
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
   * Get Note
   * Get Note
   * @returns GetCreateUpdateNoteSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getNote({
    authorization,
    version,
    contactId,
    id,
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
    /**
     * Note Id
     */
    id: string,
  }): CancelablePromise<GetCreateUpdateNoteSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contacts/{contactId}/notes/{id}',
      path: {
        'contactId': contactId,
        'id': id,
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
   * Update Note
   * Update Note
   * @returns GetCreateUpdateNoteSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static updateNote({
    authorization,
    version,
    contactId,
    id,
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
    /**
     * Note Id
     */
    id: string,
    requestBody: NotesDTO,
  }): CancelablePromise<GetCreateUpdateNoteSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/contacts/{contactId}/notes/{id}',
      path: {
        'contactId': contactId,
        'id': id,
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
   * Delete Note
   * Delete Note
   * @returns DeleteNoteSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteNote({
    authorization,
    version,
    contactId,
    id,
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
    /**
     * Note Id
     */
    id: string,
  }): CancelablePromise<DeleteNoteSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contacts/{contactId}/notes/{id}',
      path: {
        'contactId': contactId,
        'id': id,
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
