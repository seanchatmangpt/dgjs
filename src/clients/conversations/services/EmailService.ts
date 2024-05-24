/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelScheduledResponseDto } from '../models/CancelScheduledResponseDto';
import type { GetEmailMessageResponseDto } from '../models/GetEmailMessageResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmailService {
  /**
   * Get email by Id
   * Get email by Id
   * @returns GetEmailMessageResponseDto Email object for the id given.
   * @throws ApiError
   */
  public static getEmailById({
    authorization,
  }: {
    /**
     * Access Token
     */
    authorization: string,
  }): CancelablePromise<GetEmailMessageResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/conversations/messages/email/{id}',
      headers: {
        'Authorization': authorization,
      },
    });
  }
  /**
   * Cancel a scheduled email message.
   * Post the messageId for the API to delete a scheduled email message. <br />
   * @returns CancelScheduledResponseDto The scheduled email message was cancelled successfully
   * @throws ApiError
   */
  public static cancelScheduledEmailMessage({
    authorization,
    emailMessageId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * Email Message Id
     */
    emailMessageId: string,
  }): CancelablePromise<CancelScheduledResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/conversations/messages/email/{emailMessageId}/schedule',
      path: {
        'emailMessageId': emailMessageId,
      },
      headers: {
        'Authorization': authorization,
      },
    });
  }
}
