/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostSuccessfulResponseSchema } from './PostSuccessfulResponseSchema';
export type PostSuccessfulResponseDTO = {
  /**
   * Success or Failure
   */
  success: boolean;
  /**
   * Status Code
   */
  statusCode: number;
  /**
   * Message
   */
  message: string;
  /**
   * Requested Results
   */
  results?: PostSuccessfulResponseSchema;
};

