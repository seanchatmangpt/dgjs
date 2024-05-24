/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ConversationSchema = {
  /**
   * Conversation Id
   */
  id: string;
  /**
   * Contact Id
   */
  contactId: string;
  /**
   * Location Id
   */
  locationId: string;
  /**
   * Last Message Body of the conversation
   */
  lastMessageBody: string;
  /**
   * Last message type of the conversation
   */
  lastMessageType: ConversationSchema.lastMessageType;
  /**
   * Type of the conversation
   */
  type: ConversationSchema.type;
  /**
   * Unread count of the messages in the conversation
   */
  unreadCount: number;
  /**
   * Full name of the contact
   */
  fullName: string;
  /**
   * Name of the contact in case the Full Name is missing, may contain the company name or the contact email
   */
  contactName: string;
  /**
   * Email of the contact
   */
  email: string;
  /**
   * Phone number of the contact
   */
  phone: string;
};
export namespace ConversationSchema {
  /**
   * Last message type of the conversation
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
  /**
   * Type of the conversation
   */
  export enum type {
    TYPE_PHONE = 'TYPE_PHONE',
    TYPE_EMAIL = 'TYPE_EMAIL',
    TYPE_FB_MESSENGER = 'TYPE_FB_MESSENGER',
    TYPE_REVIEW = 'TYPE_REVIEW',
  }
}

