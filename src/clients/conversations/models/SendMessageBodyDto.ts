/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SendMessageBodyDto = {
  type: SendMessageBodyDto.type;
  contactId: string;
  appointmentId?: string;
  attachments?: Array<string>;
  emailFrom?: string;
  emailCc?: Array<string>;
  emailBcc?: Array<string>;
  html?: string;
  message?: string;
  subject?: string;
  /**
   * Specify the emailId on which the reply needs to go out
   */
  replyMessageId?: string;
  templateId?: string;
  /**
   * UTC Timestamp (in seconds) at which the message should be scheduled
   */
  scheduledTimestamp?: number;
  conversationProviderId?: string;
  /**
   * `emailTo` field is used when you want to send the email to a different email address than the contact's primary email.
   */
  emailTo?: string;
  emailReplyMode?: SendMessageBodyDto.emailReplyMode;
};
export namespace SendMessageBodyDto {
  export enum type {
    SMS = 'SMS',
    EMAIL = 'Email',
    WHATS_APP = 'WhatsApp',
    GMB = 'GMB',
    IG = 'IG',
    FB = 'FB',
    CUSTOM = 'Custom',
    LIVE_CHAT = 'Live_Chat',
  }
  export enum emailReplyMode {
    REPLY = 'reply',
    REPLY_ALL = 'reply_all',
  }
}

