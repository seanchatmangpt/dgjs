/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CallDataDTO } from './CallDataDTO';
export type ProcessMessageBodyDto = {
  /**
   * Message Type
   */
  type: ProcessMessageBodyDto.type;
  /**
   * Array of attachments
   */
  attachments?: Array<string>;
  /**
   * Message Body
   */
  message?: string;
  /**
   * Conversation Id
   */
  conversationId: string;
  /**
   * Conversation Provider Id
   */
  conversationProviderId: string;
  /**
   * HTML Body of Email
   */
  html?: string;
  /**
   * Subject of the Email
   */
  subject?: string;
  /**
   * From Email Address
   */
  emailFrom?: string;
  /**
   * To Email Address
   */
  emailTo?: string;
  /**
   * List of email address to CC
   */
  emailCc?: Array<string>;
  /**
   * List of email address to BCC
   */
  emailBcc?: Array<string>;
  /**
   * Send the email message id for which this email should be threaded. This is for replying to a specific email
   */
  emailMessageId?: string;
  /**
   * external mail provider's message id
   */
  altId?: string;
  /**
   * Message direction, if required can be set manually, default is outbound
   */
  direction?: Record<string, any>;
  /**
   * Date of the inbound message
   */
  date?: string;
  /**
   * Phone call dialer and receiver information
   */
  call?: CallDataDTO;
};
export namespace ProcessMessageBodyDto {
  /**
   * Message Type
   */
  export enum type {
    SMS = 'SMS',
    EMAIL = 'Email',
    WHATS_APP = 'WhatsApp',
    GMB = 'GMB',
    IG = 'IG',
    FB = 'FB',
    CUSTOM = 'Custom',
    WEB_CHAT = 'WebChat',
    LIVE_CHAT = 'Live_Chat',
    CALL = 'Call',
  }
}

