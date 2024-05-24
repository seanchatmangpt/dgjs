/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Availability } from './Availability';
import type { CalendarNotification } from './CalendarNotification';
import type { OpenHour } from './OpenHour';
import type { Recurring } from './Recurring';
import type { TeamMemeber } from './TeamMemeber';
export type CalendarDTO = {
  /**
   * Calendar Notifications
   */
  notifications?: Array<CalendarNotification>;
  locationId: string;
  /**
   * Group Id
   */
  groupId?: string;
  /**
   * Team members are required for calendars of type: Round Robin, Collective, Class, Service.
   */
  teamMembers?: Array<TeamMemeber>;
  eventType?: CalendarDTO.eventType;
  name: string;
  description?: string;
  slug?: string;
  widgetSlug?: string;
  calendarType?: CalendarDTO.calendarType;
  /**
   * Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout.
   */
  widgetType?: CalendarDTO.widgetType;
  eventTitle?: string;
  eventColor?: string;
  meetingLocation?: string;
  slotDuration?: number;
  preBufferUnit?: CalendarDTO.preBufferUnit;
  slotInterval?: number;
  slotBuffer?: number;
  preBuffer?: number;
  /**
   * Maximum bookings per slot (per user). Maximum seats per slot in case of Class Booking Calendar.
   */
  appoinmentPerSlot?: number;
  appoinmentPerDay?: number;
  /**
   * This is only to set the standard availability. For custom availability, use the availabilities property
   */
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
  formSubmitType?: CalendarDTO.formSubmitType;
  formSubmitRedirectURL?: string;
  formSubmitThanksMessage?: string;
  availabilityType?: CalendarDTO.availabilityType;
  /**
   * This is only to set the custom availability. For standard availability, use the openHours property
   */
  availabilities?: Array<Availability>;
  guestType?: CalendarDTO.guestType;
  consentLabel?: string;
  calendarCoverImage?: string;
  id: string;
};
export namespace CalendarDTO {
  export enum eventType {
    ROUND_ROBIN_OPTIMIZE_FOR_AVAILABILITY = 'RoundRobin_OptimizeForAvailability',
    ROUND_ROBIN_OPTIMIZE_FOR_EQUAL_DISTRIBUTION = 'RoundRobin_OptimizeForEqualDistribution',
  }
  export enum calendarType {
    ROUND_ROBIN = 'round_robin',
    EVENT = 'event',
    CLASS_BOOKING = 'class_booking',
    COLLECTIVE = 'collective',
    SERVICE_BOOKING = 'service_booking',
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

