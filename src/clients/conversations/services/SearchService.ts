/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SendConversationResponseDto } from '../models/SendConversationResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
  /**
   * Search Conversations
   * Returns a list of all conversations matching the search criteria along with the sort and filter options selected.
   * @returns SendConversationResponseDto Successfully fetched the conversations
   * @throws ApiError
   */
  public static searchConversation({
    authorization,
    version,
    locationId,
    contactId,
    assignedTo,
    query,
    sort,
    startAfterDate,
    id,
    limit,
    lastMessageType,
    lastMessageAction,
    lastMessageDirection,
    status,
    sortBy,
    sortScoreProfile,
    scoreProfile,
    scoreProfileMin,
    scoreProfileMax,
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
     * Location Id
     */
    locationId: string,
    /**
     * Contact Id
     */
    contactId?: string,
    /**
     * Assigned to user Id. Multiple values are comma separated. "unassigned" is used to fetch all unassigned conversations
     */
    assignedTo?: string,
    /**
     * Search paramater as a string
     */
    query?: string,
    /**
     * Sort paramater - asc or desc
     */
    sort?: 'asc' | 'desc',
    /**
     * Search to begin after the specified date - should contain the sort value of the last document
     */
    startAfterDate?: any,
    /**
     * Id of the conversation
     */
    id?: string,
    /**
     * Limit of conversations - Default is 20
     */
    limit?: number,
    /**
     * Type of the last message in the conversation as a string
     */
    lastMessageType?: 'TYPE_CALL' | 'TYPE_SMS' | 'TYPE_EMAIL' | 'TYPE_SMS_REVIEW_REQUEST' | 'TYPE_WEBCHAT' | 'TYPE_SMS_NO_SHOW_REQUEST' | 'TYPE_CAMPAIGN_SMS' | 'TYPE_CAMPAIGN_CALL' | 'TYPE_CAMPAIGN_EMAIL' | 'TYPE_CAMPAIGN_VOICEMAIL' | 'TYPE_FACEBOOK' | 'TYPE_CAMPAIGN_FACEBOOK' | 'TYPE_CAMPAIGN_MANUAL_CALL' | 'TYPE_CAMPAIGN_MANUAL_SMS' | 'TYPE_GMB' | 'TYPE_CAMPAIGN_GMB' | 'TYPE_REVIEW' | 'TYPE_INSTAGRAM' | 'TYPE_WHATSAPP' | 'TYPE_CUSTOM_SMS' | 'TYPE_CUSTOM_EMAIL' | 'TYPE_CUSTOM_PROVIDER_SMS' | 'TYPE_CUSTOM_PROVIDER_EMAIL' | 'TYPE_IVR_CALL' | 'TYPE_ACTIVITY_CONTACT' | 'TYPE_ACTIVITY_INVOICE' | 'TYPE_ACTIVITY_PAYMENT' | 'TYPE_ACTIVITY_OPPORTUNITY' | 'TYPE_LIVE_CHAT' | 'TYPE_LIVE_CHAT_INFO_MESSAGE' | 'TYPE_ACTIVITY_APPOINTMENT' | 'TYPE_FACEBOOK_COMMENT' | 'TYPE_INSTAGRAM_COMMENT' | 'TYPE_ACTIVITY',
    /**
     * Action of the last outbound message in the conversation as string.
     */
    lastMessageAction?: 'automated' | 'manual',
    /**
     * Direction of the last message in the conversation as string.
     */
    lastMessageDirection?: 'inbound' | 'outbound',
    /**
     * The status of the conversation to be filtered - all, read, unread, starred
     */
    status?: 'all' | 'read' | 'unread' | 'starred' | 'recents',
    /**
     * The sorting of the conversation to be filtered as - manual messages or all messages
     */
    sortBy?: 'last_manual_message_date' | 'last_message_date' | 'score_profile',
    /**
     * Id of score profile on which sortBy.ScoreProfile should sort on
     */
    sortScoreProfile?: string,
    /**
     * Id of score profile on which conversations should get filtered out, works with scoreProfileMin & scoreProfileMax
     */
    scoreProfile?: string,
    /**
     * Minimum value for score
     */
    scoreProfileMin?: number,
    /**
     * Maximum value for score
     */
    scoreProfileMax?: number,
  }): CancelablePromise<SendConversationResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/conversations/search',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'contactId': contactId,
        'assignedTo': assignedTo,
        'query': query,
        'sort': sort,
        'startAfterDate': startAfterDate,
        'id': id,
        'limit': limit,
        'lastMessageType': lastMessageType,
        'lastMessageAction': lastMessageAction,
        'lastMessageDirection': lastMessageDirection,
        'status': status,
        'sortBy': sortBy,
        'sortScoreProfile': sortScoreProfile,
        'scoreProfile': scoreProfile,
        'scoreProfileMin': scoreProfileMin,
        'scoreProfileMax': scoreProfileMax,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
}
