/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermissionsDto } from './PermissionsDto';
import type { RoleSchema } from './RoleSchema';
export type UserSuccessfulResponseDto = {
  id?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  extension?: string;
  permissions?: PermissionsDto;
  roles?: RoleSchema;
};

