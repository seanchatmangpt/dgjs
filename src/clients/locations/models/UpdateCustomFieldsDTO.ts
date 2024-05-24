/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { textBoxListOptionsSchema } from './textBoxListOptionsSchema';
export type UpdateCustomFieldsDTO = {
  name: string;
  placeholder?: string;
  acceptedFormat?: Array<string>;
  isMultipleFile?: boolean;
  maxNumberOfFiles?: number;
  textBoxListOptions?: Array<textBoxListOptionsSchema>;
  position?: number;
  /**
   * Model of the custom field you want to update
   */
  model?: UpdateCustomFieldsDTO.model;
};
export namespace UpdateCustomFieldsDTO {
  /**
   * Model of the custom field you want to update
   */
  export enum model {
    CONTACT = 'contact',
    OPPORTUNITY = 'opportunity',
  }
}

