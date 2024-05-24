/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorDto } from './ErrorDto';
export type UpdateMessageStatusDto = {
  /**
   * Message status
   */
  status: UpdateMessageStatusDto.status;
  /**
   * Error object from the conversation provider
   */
  error?: ErrorDto;
  /**
   * Email message Id
   */
  emailMessageId?: string;
  /**
   * Email delivery status for additional email recipients.
   */
  recipients?: Array<string>;
};
export namespace UpdateMessageStatusDto {
  /**
   * Message status
   */
  export enum status {
    ANSWERED = 'answered',
    BUSY = 'busy',
    CANCELED = 'canceled',
    COMPLETED = 'completed',
    FAILED = 'failed',
    NO_ANSWER = 'no-answer',
    PENDING = 'pending',
    DELIVERED = 'delivered',
    READ = 'read',
  }
}

