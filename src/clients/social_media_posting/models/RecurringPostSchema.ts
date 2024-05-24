/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RecurringPostSchema = {
  /**
   * recurrenceType is a Enum with values - day, week, month, year
   */
  recurrenceType?: Record<string, any>;
  /**
   * Repeat period
   */
  repeatEvery?: number;
  /**
   * Start Date
   */
  startDate?: string;
  /**
   * End Date
   */
  endDate?: string;
  /**
   * Only required if recurrenceType is set to week
   */
  weekDays?: Array<number>;
  /**
   * Post Time
   */
  postTime?: string;
};

