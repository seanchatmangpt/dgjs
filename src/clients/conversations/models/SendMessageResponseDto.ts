/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SendMessageResponseDto = {
  /**
   * Conversation ID.
   */
  conversationId: string;
  /**
   * This contains the email message id (only for Email type). Use this ID to send inbound replies to GHL to create a threaded email.
   */
  emailMessageId?: string;
  /**
   * This is the main Message ID
   */
  messageId: string;
  /**
   * When sending via the GMB channel, we will be returning list of `messageIds` instead of single `messageId`.
   */
  messageIds?: Array<string>;
  /**
   * Additional response message when sending a workflow message
   */
  msg?: string;
};

