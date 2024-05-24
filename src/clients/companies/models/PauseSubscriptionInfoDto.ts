/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PauseSubscriptionInfoDto = {
  requested_on: string;
  req_by: string;
  reason: string;
  status: PauseSubscriptionInfoDto.status;
  processed_on: string;
};
export namespace PauseSubscriptionInfoDto {
  export enum status {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
  }
}

