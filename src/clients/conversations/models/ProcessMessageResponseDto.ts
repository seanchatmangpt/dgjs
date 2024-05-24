/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProcessMessageResponseDto = {
  success: boolean;
  /**
   * Conversation ID.
   */
  conversationId: string;
  /**
   * This is the main Message ID
   */
  messageId: string;
  message: string;
  contactId?: string;
  dateAdded?: string;
  emailMessageId?: string;
};

