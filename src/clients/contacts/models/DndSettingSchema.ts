/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DndSettingSchema = {
  status: DndSettingSchema.status;
  message?: string;
  code?: string;
};
export namespace DndSettingSchema {
  export enum status {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PERMANENT = 'permanent',
  }
}

