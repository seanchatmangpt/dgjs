/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactSessionIds } from './ContactSessionIds';
import type { PageDetailsSchema } from './PageDetailsSchema';
export type EventDataSchema = {
  fbc?: string;
  fbp?: string;
  page?: PageDetailsSchema;
  type?: string;
  domain?: string;
  medium?: string;
  source?: string;
  version?: string;
  adSource?: string;
  mediumId?: string;
  parentId?: string;
  referrer?: string;
  fbEventId?: string;
  timestamp?: number;
  parentName?: string;
  fingerprint?: string;
  pageVisitType?: string;
  contactSessionIds?: ContactSessionIds | null;
};

