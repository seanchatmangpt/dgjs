/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Availability } from './Availability';
import type { CalendarNotification } from './CalendarNotification';
import type { OpenHour } from './OpenHour';
import type { Recurring } from './Recurring';
import type { TeamMemeber } from './TeamMemeber';
export type CalendarUpdateDTO = {
  /**
   * Calendar Notifications
   */
  notifications?: Array<CalendarNotification>;
  /**
   * Group Id
   */
  groupId?: string;
  /**
   * Team members
   */
  teamMembers?: Array<TeamMemeber>;
  eventType?: CalendarUpdateDTO.eventType;
  name?: string;
  description?: string;
  slug?: string;
  widgetSlug?: string;
  /**
   * Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout.
   */
  widgetType?: CalendarUpdateDTO.widgetType;
  eventTitle?: string;
  eventColor?: string;
  meetingLocation?: string;
  slotDuration?: number;
  preBufferUnit?: CalendarUpdateDTO.preBufferUnit;
  slotInterval?: number;
  slotBuffer?: number;
  preBuffer?: number;
  appoinmentPerSlot?: number;
  appoinmentPerDay?: number;
  openHours?: Array<OpenHour>;
  enableRecurring?: boolean;
  recurring?: Recurring;
  formId?: string;
  stickyContact?: boolean;
  isLivePaymentMode?: boolean;
  autoConfirm?: boolean;
  shouldSendAlertEmailsToAssignedMember?: boolean;
  alertEmail?: string;
  googleInvitationEmails?: boolean;
  allowReschedule?: boolean;
  allowCancellation?: boolean;
  shouldAssignContactToTeamMember?: boolean;
  shouldSkipAssigningContactForExisting?: boolean;
  notes?: string;
  pixelId?: string;
  formSubmitType?: CalendarUpdateDTO.formSubmitType;
  formSubmitRedirectURL?: string;
  formSubmitThanksMessage?: string;
  availabilityType?: CalendarUpdateDTO.availabilityType;
  /**
   * This is only to set the custom availability. For standard availability, use the openHours property
   */
  availabilities?: Array<Availability>;
  guestType?: CalendarUpdateDTO.guestType;
  consentLabel?: string;
  calendarCoverImage?: string;
};
export namespace CalendarUpdateDTO {
  export enum eventType {
    ROUND_ROBIN_OPTIMIZE_FOR_AVAILABILITY = 'RoundRobin_OptimizeForAvailability',
    ROUND_ROBIN_OPTIMIZE_FOR_EQUAL_DISTRIBUTION = 'RoundRobin_OptimizeForEqualDistribution',
  }
  /**
   * Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout.
   */
  export enum widgetType {
    DEFAULT = 'default',
    CLASSIC = 'classic',
  }
  export enum preBufferUnit {
    MINS = 'mins',
    HOURS = 'hours',
  }
  export enum formSubmitType {
    REDIRECT_URL = 'RedirectURL',
    THANK_YOU_MESSAGE = 'ThankYouMessage',
  }
  export enum availabilityType {
    STANDARD = 'STANDARD',
    CUSTOM = 'CUSTOM',
  }
  export enum guestType {
    COUNT_ONLY = 'count_only',
    COLLECT_DETAIL = 'collect_detail',
  }
}

