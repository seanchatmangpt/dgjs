/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchMetaResponseSchema } from './SearchMetaResponseSchema';
import type { SearchOpportunitiesResponseSchema } from './SearchOpportunitiesResponseSchema';
export type SearchSuccessfulResponseDto = {
  opportunities?: Array<SearchOpportunitiesResponseSchema>;
  meta?: SearchMetaResponseSchema;
  aggregations?: Record<string, any>;
};

