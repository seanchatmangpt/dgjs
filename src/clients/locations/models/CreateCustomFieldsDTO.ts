/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { textBoxListOptionsSchema } from './textBoxListOptionsSchema';
export type CreateCustomFieldsDTO = {
  name: string;
  dataType: string;
  placeholder?: string;
  acceptedFormat?: Array<string>;
  isMultipleFile?: boolean;
  maxNumberOfFiles?: number;
  textBoxListOptions?: Array<textBoxListOptionsSchema>;
  position?: number;
  /**
   * Model of the custom field you want to create
   */
  model?: CreateCustomFieldsDTO.model;
};
export namespace CreateCustomFieldsDTO {
  /**
   * Model of the custom field you want to create
   */
  export enum model {
    CONTACT = 'contact',
    OPPORTUNITY = 'opportunity',
  }
}

