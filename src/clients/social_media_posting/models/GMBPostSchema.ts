/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndDateSchema } from './EndDateSchema';
import type { StartDateSchema } from './StartDateSchema';
export type GMBPostSchema = {
  /**
   * gmbEventType must be one of the following values: STANDARD, EVENT, OFFER
   */
  gmbEventType?: string;
  /**
   * Title
   */
  title?: string;
  /**
   * Offer Title
   */
  offerTitle?: string;
  /**
   * Start Date
   */
  startDate?: StartDateSchema;
  /**
   * End Title
   */
  endDate?: EndDateSchema;
  /**
   * Terms Condition Url
   */
  termsConditions?: string;
  /**
   * Url
   */
  url?: string;
  /**
   * Coupon Code
   */
  couponCode?: string;
  /**
   * Redeem Online Url
   */
  redeemOnlineUrl?: string;
  /**
   * Action Type must be one of the following values: none, order, book, shop, learn more, call, sign up
   */
  actionType?: string;
};

