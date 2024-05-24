/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetEmailTemplateResponseSchema } from './GetEmailTemplateResponseSchema';
import type { GetSmsTemplateResponseSchema } from './GetSmsTemplateResponseSchema';
export type GetTemplatesSuccessfulResponseDto = {
  templates?: Array<(GetSmsTemplateResponseSchema | GetEmailTemplateResponseSchema)>;
  totalCount?: number;
};

