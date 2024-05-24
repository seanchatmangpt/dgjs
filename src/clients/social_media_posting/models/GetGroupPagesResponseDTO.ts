/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetGroupPagesSchema } from './GetGroupPagesSchema';
export type GetGroupPagesResponseDTO = {
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
  results?: GetGroupPagesSchema;
};

