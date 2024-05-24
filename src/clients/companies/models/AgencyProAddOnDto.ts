/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AgencyProAddOnDto = {
  is_active: boolean;
  agency_pro_addon_subscription_id: string;
  agency_pro_addon_active_plan: AgencyProAddOnDto.agency_pro_addon_active_plan;
};
export namespace AgencyProAddOnDto {
  export enum agency_pro_addon_active_plan {
    REVIEWS_MONTHLY_150 = 'reviews_monthly_150',
    LISTING_MONTHLY_50 = 'listing_monthly_50',
    CONVERSATIONS_MONTHLY_100 = 'conversations_monthly_100',
    PRIORITY_SUPPORT_MONTHLY_300 = 'priority-support_monthly_300',
    PRIORITY_SUPPORT_ANNUAL_300 = 'priority-support_annual_300',
    PRIORITY_SUPPORT_MONTHLY_300_LEGACY = 'priority-support_monthly_300_legacy',
    PRIORITY_SUPPORT_ANNUAL_300_LEGACY = 'priority-support_annual_300_legacy',
    PRIORITY_SUPPORT_MONTHLY_240_JULY = 'priority-support_monthly_240_july',
    HIPAA_MONTHLY_297 = 'hipaa_monthly_297',
    HIPAA_ANNUAL_297 = 'hipaa_annual_297',
    HIPAA_MONTHLY_297_LEGACY = 'hipaa_monthly_297_legacy',
    AGENCY_PRO_PLUS_MONTHLY_399 = 'agency-pro-plus_monthly_399',
    AGENCY_PRO_PLUS_ANNUAL_399 = 'agency-pro-plus_annual_399',
  }
}

