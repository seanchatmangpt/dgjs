/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetMessageResponseDto = {
  id: string;
  type: number;
  locationId: string;
  contactId: string;
  conversationId: string;
  dateAdded: string;
  body?: string;
  direction: GetMessageResponseDto.direction;
  status?: GetMessageResponseDto.status;
  contentType: string;
  /**
   * An array of attachment URLs. Attachments will be empty for Call and Voicemails, type 1 and 10. Please use get call recording API to fetch call recording and voicemails.
   */
  attachments?: Array<string>;
  /**
   * meta will contain email, for message type 3 (email). messageIds is list of all email message ids under the message thread
   */
  meta?: Record<string, any>;
  /**
   * Message source
   */
  source?: GetMessageResponseDto.source;
};
export namespace GetMessageResponseDto {
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
   * Message source
   */
  export enum source {
    WORKFLOW = 'workflow',
    BULK_ACTIONS = 'bulk_actions',
    CAMPAIGN = 'campaign',
    API = 'api',
    APP = 'app',
  }
}

