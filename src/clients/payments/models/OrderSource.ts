/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrderSource = {
  type: OrderSource.type;
  subType?: OrderSource.subType;
  id: string;
  name?: string;
  meta?: Record<string, any>;
};
export namespace OrderSource {
  export enum type {
    FUNNEL = 'funnel',
    WEBSITE = 'website',
    INVOICE = 'invoice',
    CALENDAR = 'calendar',
    TEXT2PAY = 'text2Pay',
    MEMBERSHIP = 'membership',
    MOBILE_APP = 'mobile_app',
    COMMUNITIES = 'communities',
    POINT_OF_SALE = 'point_of_sale',
    MANUAL = 'manual',
    FORM = 'form',
    SURVEY = 'survey',
    PAYMENT_LINK = 'payment_link',
    EXTERNAL = 'external',
  }
  export enum subType {
    ONE_STEP_ORDER_FORM = 'one_step_order_form',
    TWO_STEP_ORDER_FORM = 'two_step_order_form',
    UPSELL = 'upsell',
    TAP_TO_PAY = 'tap_to_pay',
    CARD_PAYMENT = 'card_payment',
    STORE = 'store',
    CONTACT_VIEW = 'contact_view',
    EMAIL_CAMPAIGN = 'email_campaign',
    PAYMENTS_DASHBOARD = 'payments_dashboard',
    SHOPIFY = 'shopify',
  }
}

