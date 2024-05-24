/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AttachTiktokAccountDTO = {
  type?: AttachTiktokAccountDTO.type;
  originId?: string;
  name?: string;
  avatar?: string;
  verified?: boolean;
  username?: string;
  /**
   * Company ID
   */
  companyId?: string;
};
export namespace AttachTiktokAccountDTO {
  export enum type {
    PAGE = 'page',
    GROUP = 'group',
    PROFILE = 'profile',
    LOCATION = 'location',
    BUSINESS = 'business',
  }
}

