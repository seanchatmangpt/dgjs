/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Hour } from './Hour';
export type Availability = {
  /**
   * The ID of the custom availability object. It is required while updating or deleting the existing custom date availability
   */
  id?: string;
  /**
   * Formulate the date string in the format of `<YYYY-MM-DD in local timezone>T00:00:00.000Z`.
   */
  date: string;
  hours: Array<Hour>;
  deleted?: boolean;
};

