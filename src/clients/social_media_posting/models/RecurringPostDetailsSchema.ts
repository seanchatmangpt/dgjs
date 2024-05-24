/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RecurringPostDetailsSchema = {
  /**
   * recurrenceType is a Enum with values - day, week, month, year
   */
  recurrenceType?: RecurringPostDetailsSchema.recurrenceType;
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
export namespace RecurringPostDetailsSchema {
  /**
   * recurrenceType is a Enum with values - day, week, month, year
   */
  export enum recurrenceType {
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'month',
    YEAR = 'year',
  }
}

