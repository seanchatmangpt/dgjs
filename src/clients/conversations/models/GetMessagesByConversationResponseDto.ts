/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetMessageResponseDto } from './GetMessageResponseDto';
export type GetMessagesByConversationResponseDto = {
  /**
   * Id of the last message in the messages array
   */
  lastMessageId: string;
  /**
   * Next page value true indicates only 20 message is in the response. Rest of the messages are in the next page. Please use the lastMessageId value in the query to get the next page messages
   */
  nextPage: boolean;
  /**
   * Array of messages
   */
  messages: Array<GetMessageResponseDto>;
};

