/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateRebillingDto = {
  product: UpdateRebillingDto.product;
  locationIds: Array<string>;
  config: Record<string, any>;
};
export namespace UpdateRebillingDto {
  export enum product {
    CONTENT_AI = 'contentAI',
    WORKFLOW_PREMIUM_ACTIONS = 'workflow_premium_actions',
    WORKFLOW_AI = 'workflow_ai',
    CONVERSATION_AI = 'conversationAI',
    WHATS_APP = 'whatsApp',
    REVIEWS_AI = 'reviewsAI',
    PHONE = 'Phone',
    EMAIL = 'Email',
  }
}

