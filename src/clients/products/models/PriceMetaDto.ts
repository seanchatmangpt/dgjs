/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PriceMetaDto = {
  /**
   * The source of the price.
   */
  source: PriceMetaDto.source;
  /**
   * The Stripe price ID associated with the price.
   */
  stripePriceId: string;
  /**
   * The internal source of the price.
   */
  internalSource: PriceMetaDto.internalSource;
};
export namespace PriceMetaDto {
  /**
   * The source of the price.
   */
  export enum source {
    STRIPE = 'stripe',
  }
  /**
   * The internal source of the price.
   */
  export enum internalSource {
    AGENCY_PLAN = 'agency_plan',
    FUNNEL = 'funnel',
    MEMBERSHIP = 'membership',
  }
}

