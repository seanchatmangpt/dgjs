/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgencyProAddOnDto } from './AgencyProAddOnDto';
import type { DowngradeDto } from './DowngradeDto';
import type { EndTrialDto } from './EndTrialDto';
import type { PauseSubscriptionInfoDto } from './PauseSubscriptionInfoDto';
import type { ReactivationAttemptDto } from './ReactivationAttemptDto';
export type BillingInfoDto = {
  first_trial_extension_processed_on?: string;
  first_trial_extension_reason?: string;
  second_trial_extension_processed_on?: string;
  second_trial_extension_reason?: string;
  pause_subscription_requested_on?: string;
  pause_subscription_reason?: string;
  pause_subscription_status?: BillingInfoDto.pause_subscription_status;
  pause_subscription_req_processed_on?: string;
  pause_subscription_req_by?: string;
  end_trial_early?: EndTrialDto;
  agency_pro_addon?: AgencyProAddOnDto;
  coupons_added?: Array<string>;
  reactivation_attempt?: ReactivationAttemptDto;
  downgrade?: DowngradeDto;
  first_payment_date?: string;
  pause_subscription_info?: PauseSubscriptionInfoDto;
};
export namespace BillingInfoDto {
  export enum pause_subscription_status {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
  }
}

