/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CustomFieldSchema = {
  id?: string;
  name?: string;
  fieldKey?: string;
  placeholder?: string;
  dataType?: string;
  position?: number;
  picklistOptions?: Array<string>;
  picklistImageOptions?: Array<string>;
  isAllowedCustomOption?: boolean;
  isMultiFileAllowed?: boolean;
  maxFileLimit?: number;
  locationId?: string;
  /**
   * Model of the custom field
   */
  model?: CustomFieldSchema.model;
};
export namespace CustomFieldSchema {
  /**
   * Model of the custom field
   */
  export enum model {
    CONTACT = 'contact',
    OPPORTUNITY = 'opportunity',
  }
}

