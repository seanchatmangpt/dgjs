/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelScheduledResponseDto } from '../models/CancelScheduledResponseDto';
import type { GetMessageResponseDto } from '../models/GetMessageResponseDto';
import type { GetMessagesByConversationResponseDto } from '../models/GetMessagesByConversationResponseDto';
import type { ProcessMessageBodyDto } from '../models/ProcessMessageBodyDto';
import type { ProcessMessageResponseDto } from '../models/ProcessMessageResponseDto';
import type { SendMessageBodyDto } from '../models/SendMessageBodyDto';
import type { SendMessageResponseDto } from '../models/SendMessageResponseDto';
import type { UpdateMessageStatusDto } from '../models/UpdateMessageStatusDto';
import type { UploadFilesDto } from '../models/UploadFilesDto';
import type { UploadFilesResponseDto } from '../models/UploadFilesResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessagesService {
  /**
   * Get message by message id
   * Get message by message id.
   * @returns GetMessageResponseDto Message object for the id given.
   * @throws ApiError
   */
  public static getMessage({
    authorization,
    version,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
  }): CancelablePromise<GetMessageResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/conversations/messages/{id}',
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
   * Get messages by conversation id
   * Get messages by conversation id.
   * @returns GetMessagesByConversationResponseDto List of messages for the conversation id of the given type.
   * @throws ApiError
   */
  public static getMessages({
    authorization,
    version,
    conversationId,
    lastMessageId,
    limit,
    type,
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
    /**
     * Message ID of the last message in the list as a string
     */
    lastMessageId?: string,
    /**
     * Number of messages to be fetched from the conversation. Default limit is 20
     */
    limit?: number,
    /**
     * Types of message to fetched separated with comma
     */
    type?: 'TYPE_CALL' | 'TYPE_SMS' | 'TYPE_EMAIL' | 'TYPE_FACEBOOK' | 'TYPE_GMB' | 'TYPE_INSTAGRAM' | 'TYPE_WHATSAPP' | 'TYPE_ACTIVITY_CONTACT' | 'TYPE_ACTIVITY_INVOICE' | 'TYPE_ACTIVITY_PAYMENT' | 'TYPE_ACTIVITY_OPPORTUNITY' | 'TYPE_LIVE_CHAT' | 'TYPE_ACTIVITY_APPOINTMENT',
  }): CancelablePromise<GetMessagesByConversationResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/conversations/{conversationId}/messages',
      path: {
        'conversationId': conversationId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'lastMessageId': lastMessageId,
        'limit': limit,
        'type': type,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Send a new message
   * Post the necessary fields for the API to send a new message.
   * @returns SendMessageResponseDto Created the message
   * @throws ApiError
   */
  public static sendANewMessage({
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
    requestBody: SendMessageBodyDto,
  }): CancelablePromise<SendMessageResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/conversations/messages',
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
   * Add an inbound message
   * Post the necessary fields for the API to add a new inbound message. <br />
   * @returns ProcessMessageResponseDto Created the message
   * @throws ApiError
   */
  public static addAnInboundMessage({
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
    requestBody: ProcessMessageBodyDto,
  }): CancelablePromise<ProcessMessageResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/conversations/messages/inbound',
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
   * Cancel a scheduled message.
   * Post the messageId for the API to delete a scheduled message. <br />
   * @returns CancelScheduledResponseDto The scheduled message was cancelled successfully
   * @throws ApiError
   */
  public static cancelScheduledMessage({
    authorization,
    version,
    messageId,
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
     * Message Id
     */
    messageId: string,
  }): CancelablePromise<CancelScheduledResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/conversations/messages/{messageId}/schedule',
      path: {
        'messageId': messageId,
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
   * Upload file attachments
   * Post the necessary fields for the API to upload files. The files need to be a buffer with the key "fileAttachment". <br /><br /> The allowed file types are: <br> <ul><li>JPG</li><li>JPEG</li><li>PNG</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>PDF</li><li>DOC</li><li>DOCX</li><li>TXT</li></ul> <br /><br /> The API will return an object with the URLs
   * @returns UploadFilesResponseDto Uploaded the file successfully
   * @throws ApiError
   */
  public static uploadFileAttachments({
    authorization,
    version,
    formData,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-04-15',
    formData: UploadFilesDto,
  }): CancelablePromise<UploadFilesResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/conversations/messages/upload',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        413: `Payload Too Large`,
        415: `Unsupported Media Type`,
      },
    });
  }
  /**
   * Update message status
   * Post the necessary fields for the API to update message status.
   * @returns SendMessageResponseDto Created the message
   * @throws ApiError
   */
  public static updateMessageStatus({
    authorization,
    version,
    messageId,
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
     * Message Id
     */
    messageId: string,
    requestBody: UpdateMessageStatusDto,
  }): CancelablePromise<SendMessageResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/conversations/messages/{messageId}/status',
      path: {
        'messageId': messageId,
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
   * Get Recording by Message ID
   * Get the recording for a message by passing the message id
   * @returns string Gives the attached recording to the message
   * @throws ApiError
   */
  public static getMessageRecording({
    authorization,
    version,
    locationId,
    messageId,
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
     * Location ID as string
     */
    locationId: string,
    /**
     * Message ID as string
     */
    messageId: string,
  }): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/conversations/messages/{messageId}/locations/{locationId}/recording',
      path: {
        'locationId': locationId,
        'messageId': messageId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      responseHeader: 'Content-Type',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
}
