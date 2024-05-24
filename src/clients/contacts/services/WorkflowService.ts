/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactsWorkflowSuccessfulResponseDto } from '../models/ContactsWorkflowSuccessfulResponseDto';
import type { CreateWorkflowDto } from '../models/CreateWorkflowDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkflowService {
  /**
   * Add Contact to Workflow
   * Add Contact to Workflow
   * @returns ContactsWorkflowSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static addContactToWorkflow({
    authorization,
    version,
    contactId,
    workflowId,
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
     * Workflow Id
     */
    workflowId: string,
    requestBody: CreateWorkflowDto,
  }): CancelablePromise<ContactsWorkflowSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contacts/{contactId}/workflow/{workflowId}',
      path: {
        'contactId': contactId,
        'workflowId': workflowId,
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
   * Delete Contact to Workflow
   * Delete Contact to Workflow
   * @returns ContactsWorkflowSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteContactToWorkflow({
    authorization,
    version,
    contactId,
    workflowId,
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
     * Workflow Id
     */
    workflowId: string,
    requestBody: CreateWorkflowDto,
  }): CancelablePromise<ContactsWorkflowSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contacts/{contactId}/workflow/{workflowId}',
      path: {
        'contactId': contactId,
        'workflowId': workflowId,
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
}
