/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CustomRRuleOptionsDto = {
  intervalType: CustomRRuleOptionsDto.intervalType;
  interval: number;
  /**
   * Start date in YYYY-MM-DD format
   */
  startDate: string;
  /**
   * Start time in HH:mm:ss format
   */
  startTime?: string;
  /**
   * End date in YYYY-MM-DD format
   */
  endDate?: string;
  /**
   * End time in HH:mm:ss format
   */
  endTime?: string;
  /**
   * -1, 1, 2, 3, ..., 27, 28
   */
  dayOfMonth?: number;
  dayOfWeek?: CustomRRuleOptionsDto.dayOfWeek;
  /**
   * -1, 1, 2, 3, 4
   */
  numOfWeek?: number;
  monthOfYear?: CustomRRuleOptionsDto.monthOfYear;
  /**
   * Max number of task executions
   */
  count?: number;
  /**
   * Execute task number of days before
   */
  daysBefore?: number;
};
export namespace CustomRRuleOptionsDto {
  export enum intervalType {
    YEARLY = 'yearly',
    MONTHLY = 'monthly',
    WEEKLY = 'weekly',
    DAILY = 'daily',
    HOURLY = 'hourly',
    MINUTELY = 'minutely',
    SECONDLY = 'secondly',
  }
  export enum dayOfWeek {
    MO = 'mo',
    TU = 'tu',
    WE = 'we',
    TH = 'th',
    FR = 'fr',
    SA = 'sa',
    SU = 'su',
  }
  export enum monthOfYear {
    JAN = 'jan',
    FEB = 'feb',
    MAR = 'mar',
    APR = 'apr',
    MAY = 'may',
    JUN = 'jun',
    JUL = 'jul',
    AUG = 'aug',
    SEP = 'sep',
    OCT = 'oct',
    NOV = 'nov',
    DEC = 'dec',
  }
}

