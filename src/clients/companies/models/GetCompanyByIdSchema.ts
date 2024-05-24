/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingInfoDto } from './BillingInfoDto';
import type { IOnboardingDto } from './IOnboardingDto';
export type GetCompanyByIdSchema = {
  id?: string;
  name?: string;
  email?: string;
  logoUrl?: string;
  phone?: string;
  website?: string;
  domain?: string;
  spareDomain?: string;
  privacyPolicy?: string;
  termsConditions?: string;
  theme?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  state?: string;
  timezone?: string;
  relationshipNumber?: string;
  faviconUrl?: string;
  subdomain?: string;
  plan?: number;
  currency?: string;
  customerType?: string;
  termsOfServiceVersion?: string;
  termsOfServiceAcceptedBy?: string;
  twilioTrialMode?: boolean;
  twilioFreeCredits?: number;
  termsOfServiceAcceptedDate?: string;
  privacyPolicyVersion?: string;
  privacyPolicyAcceptedBy?: string;
  privacyPolicyAcceptedDate?: string;
  affiliatePolicyVersion?: string;
  affiliatePolicyAcceptedBy?: string;
  affiliatePolicyAcceptedDate?: string;
  isReselling?: boolean;
  onboardingInfo?: IOnboardingDto;
  stripeId?: string;
  /**
   * Flag to set if upgrade plan is enabled
   */
  upgradeEnabledForClients?: boolean;
  /**
   * Flag to set if cancel plan is enabled
   */
  cancelEnabledForClients?: boolean;
  /**
   * Flag to set if auto suspend is enabled
   */
  autoSuspendEnabled?: boolean;
  /**
   * Saas Settings
   */
  saasSettings?: Record<string, any>;
  stripeActivePlan?: string;
  stripeConnectId?: string;
  enableDepreciatedFeatures?: boolean;
  /**
   * If you want to enable / disable Priority Support for any agency. Default value is false.
   */
  premiumUpgraded?: boolean;
  status?: string;
  locationCount?: number;
  disableEmailService?: boolean;
  billingInfo?: BillingInfoDto;
};

