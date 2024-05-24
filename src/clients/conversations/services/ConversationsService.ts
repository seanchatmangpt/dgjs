/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateConversationDto } from '../models/CreateConversationDto';
import type { DeleteConversationSuccessfulResponse } from '../models/DeleteConversationSuccessfulResponse';
import type { GetConversationByIdResponse } from '../models/GetConversationByIdResponse';
import type { GetConversationSuccessfulResponse } from '../models/GetConversationSuccessfulResponse';
import type { UpdateConversationDto } from '../models/UpdateConversationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ConversationsService {
  /**
   * Get Conversation
   * Get the conversation details based on the conversation ID
   * @returns GetConversationByIdResponse Successful response
   * @throws ApiError
   */
  public static getConversation({
    authorization,
    version,
    conversationId,
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
     * Conversation ID as string
     */
    conversationId: string,
  }): CancelablePromise<GetConversationByIdResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/conversations/{conversationId}',
      path: {
        'conversationId': conversationId,
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
   * Update Conversation
   * Update the conversation details based on the conversation ID
   * @returns GetConversationSuccessfulResponse Successful response
   * @throws ApiError
   */
  public static updateConversation({
    authorization,
    version,
    conversationId,
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
     * Conversation ID as string
     */
    conversationId: string,
    requestBody: UpdateConversationDto,
  }): CancelablePromise<GetConversationSuccessfulResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/conversations/{conversationId}',
      path: {
        'conversationId': conversationId,
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
      },
    });
  }
  /**
   * Delete Conversation
   * Delete the conversation details based on the conversation ID
   * @returns DeleteConversationSuccessfulResponse Successful response
   * @throws ApiError
   */
  public static deleteConversation({
    authorization,
    version,
    conversationId,
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
     * Conversation ID as string
     */
    conversationId: string,
  }): CancelablePromise<DeleteConversationSuccessfulResponse> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/conversations/{conversationId}',
      path: {
        'conversationId': conversationId,
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
   * Create Conversation
   * Creates a new conversation with the data provided
   * @returns GetConversationSuccessfulResponse Successful response
   * @throws ApiError
   */
  public static createConversation({
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
    version: '2021-04-15',
    requestBody: CreateConversationDto,
  }): CancelablePromise<GetConversationSuccessfulResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/conversations/',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
}
