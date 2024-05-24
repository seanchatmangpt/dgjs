/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetEmailMessageResponseDto = {
  id: string;
  /**
   * External Id
   */
  altId?: string;
  /**
   * Message Id or thread Id
   */
  threadId: string;
  locationId: string;
  contactId: string;
  conversationId: string;
  dateAdded: string;
  subject?: string;
  body: string;
  direction: GetEmailMessageResponseDto.direction;
  status?: GetEmailMessageResponseDto.status;
  contentType: string;
  /**
   * An array of attachment URLs.
   */
  attachments?: Array<string>;
  provider?: string;
  /**
   * Name and Email Id of the sender
   */
  from: string;
  /**
   * List of email Ids of the receivers
   */
  to: Array<string>;
  /**
   * List of email Ids of the people in the cc field
   */
  cc?: Array<string>;
  /**
   * List of email Ids of the people in the bcc field
   */
  bcc?: Array<string>;
  /**
   * In case of reply, email message Id of the reply to email
   */
  replyToMessageId?: string;
  /**
   * Email Message source
   */
  source?: GetEmailMessageResponseDto.source;
};
export namespace GetEmailMessageResponseDto {
  export enum direction {
    INBOUND = 'inbound',
    OUTBOUND = 'outbound',
  }
  export enum status {
    PENDING = 'pending',
    SCHEDULED = 'scheduled',
    SENT = 'sent',
    DELIVERED = 'delivered',
    READ = 'read',
    UNDELIVERED = 'undelivered',
    CONNECTED = 'connected',
    FAILED = 'failed',
    OPENED = 'opened',
  }
  /**
   * Email Message source
   */
  export enum source {
    WORKFLOW = 'workflow',
    BULK_ACTIONS = 'bulk_actions',
    CAMPAIGN = 'campaign',
    API = 'api',
    APP = 'app',
  }
}

