/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateRedirectParams = {
  locationId: string;
  domain: string;
  path: string;
  target: string;
  action: CreateRedirectParams.action;
};
export namespace CreateRedirectParams {
  export enum action {
    FUNNEL = 'funnel',
    WEBSITE = 'website',
    URL = 'url',
    ALL = 'all',
  }
}

