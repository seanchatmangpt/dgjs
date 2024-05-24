/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateRedirectParams = {
  target: string;
  action: UpdateRedirectParams.action;
  locationId: string;
};
export namespace UpdateRedirectParams {
  export enum action {
    FUNNEL = 'funnel',
    WEBSITE = 'website',
    URL = 'url',
    ALL = 'all',
  }
}

