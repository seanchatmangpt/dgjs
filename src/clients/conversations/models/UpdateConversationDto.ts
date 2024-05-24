/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateConversationDto = {
  /**
   * Location ID as string
   */
  locationId: string;
  /**
   * Count of unread messages in the conversation
   */
  unreadCount?: number;
  /**
   * Starred status of the conversation.
   */
  starred?: boolean;
  feedback?: Record<string, any>;
};

