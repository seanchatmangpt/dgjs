/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ConversationDto = {
  /**
   * Contact ID as string
   */
  id?: string;
  /**
   * Location ID as string
   */
  locationId: string;
  /**
   * Contact ID as string
   */
  contactId: string;
  /**
   * Assigned User ID as string
   */
  assignedTo?: string;
  /**
   * User ID as string
   */
  userId?: string;
  /**
   * Last message body as string
   */
  lastMessageBody?: string;
  /**
   * Last message date as UTC
   */
  lastMessageDate?: string;
  /**
   * Type of the last message sent/receieved in the conversation.
   */
  lastMessageType?: ConversationDto.lastMessageType;
  /**
   * Count of unread messages in the conversation
   */
  unreadCount?: number;
  /**
   * Inbox status of the conversation.
   */
  inbox?: boolean;
  /**
   * Starred status of the conversation.
   */
  starred?: boolean;
  /**
   * Deleted status of the conversation.
   */
  deleted: boolean;
};
export namespace ConversationDto {
  /**
   * Type of the last message sent/receieved in the conversation.
   */
  export enum lastMessageType {
    TYPE_CALL = 'TYPE_CALL',
    TYPE_SMS = 'TYPE_SMS',
    TYPE_EMAIL = 'TYPE_EMAIL',
    TYPE_SMS_REVIEW_REQUEST = 'TYPE_SMS_REVIEW_REQUEST',
    TYPE_WEBCHAT = 'TYPE_WEBCHAT',
    TYPE_SMS_NO_SHOW_REQUEST = 'TYPE_SMS_NO_SHOW_REQUEST',
    TYPE_CAMPAIGN_SMS = 'TYPE_CAMPAIGN_SMS',
    TYPE_CAMPAIGN_CALL = 'TYPE_CAMPAIGN_CALL',
    TYPE_CAMPAIGN_EMAIL = 'TYPE_CAMPAIGN_EMAIL',
    TYPE_CAMPAIGN_VOICEMAIL = 'TYPE_CAMPAIGN_VOICEMAIL',
    TYPE_FACEBOOK = 'TYPE_FACEBOOK',
    TYPE_CAMPAIGN_FACEBOOK = 'TYPE_CAMPAIGN_FACEBOOK',
    TYPE_CAMPAIGN_MANUAL_CALL = 'TYPE_CAMPAIGN_MANUAL_CALL',
    TYPE_CAMPAIGN_MANUAL_SMS = 'TYPE_CAMPAIGN_MANUAL_SMS',
    TYPE_GMB = 'TYPE_GMB',
    TYPE_CAMPAIGN_GMB = 'TYPE_CAMPAIGN_GMB',
    TYPE_REVIEW = 'TYPE_REVIEW',
    TYPE_INSTAGRAM = 'TYPE_INSTAGRAM',
    TYPE_WHATSAPP = 'TYPE_WHATSAPP',
    TYPE_CUSTOM_SMS = 'TYPE_CUSTOM_SMS',
    TYPE_CUSTOM_EMAIL = 'TYPE_CUSTOM_EMAIL',
    TYPE_CUSTOM_PROVIDER_SMS = 'TYPE_CUSTOM_PROVIDER_SMS',
    TYPE_CUSTOM_PROVIDER_EMAIL = 'TYPE_CUSTOM_PROVIDER_EMAIL',
    TYPE_IVR_CALL = 'TYPE_IVR_CALL',
    TYPE_ACTIVITY_CONTACT = 'TYPE_ACTIVITY_CONTACT',
    TYPE_ACTIVITY_INVOICE = 'TYPE_ACTIVITY_INVOICE',
    TYPE_ACTIVITY_PAYMENT = 'TYPE_ACTIVITY_PAYMENT',
    TYPE_ACTIVITY_OPPORTUNITY = 'TYPE_ACTIVITY_OPPORTUNITY',
    TYPE_LIVE_CHAT = 'TYPE_LIVE_CHAT',
    TYPE_LIVE_CHAT_INFO_MESSAGE = 'TYPE_LIVE_CHAT_INFO_MESSAGE',
    TYPE_ACTIVITY_APPOINTMENT = 'TYPE_ACTIVITY_APPOINTMENT',
    TYPE_FACEBOOK_COMMENT = 'TYPE_FACEBOOK_COMMENT',
    TYPE_INSTAGRAM_COMMENT = 'TYPE_INSTAGRAM_COMMENT',
    TYPE_ACTIVITY = 'TYPE_ACTIVITY',
  }
}

