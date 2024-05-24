/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RecurringDto = {
  /**
   * The interval at which the recurring event occurs.
   */
  interval: RecurringDto.interval;
  /**
   * The number of intervals between each occurrence of the event.
   */
  intervalCount: number;
};
export namespace RecurringDto {
  /**
   * The interval at which the recurring event occurs.
   */
  export enum interval {
    DAY = 'day',
    MONTH = 'month',
    WEEK = 'week',
    YEAR = 'year',
  }
}

