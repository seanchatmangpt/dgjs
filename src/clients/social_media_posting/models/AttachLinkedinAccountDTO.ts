/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AttachLinkedinAccountDTO = {
  type?: AttachLinkedinAccountDTO.type;
  originId?: string;
  name?: string;
  avatar?: string;
  urn?: string;
  /**
   * Company ID
   */
  companyId?: string;
};
export namespace AttachLinkedinAccountDTO {
  export enum type {
    PAGE = 'page',
    GROUP = 'group',
    PROFILE = 'profile',
    LOCATION = 'location',
    BUSINESS = 'business',
  }
}

