/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConversationSchema } from './ConversationSchema';
export type SendConversationResponseDto = {
  /**
   * The list of all conversations found for the given query
   */
  conversations: Array<ConversationSchema>;
  /**
   * Total Number of results found for the given query
   */
  total: number;
};

