/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermissionsDto } from './PermissionsDto';
export type UpdateUserDto = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  type?: string;
  role?: string;
  /**
   * Company/Agency Id. Required for Agency Level access
   */
  companyId?: string;
  locationIds?: Array<string>;
  permissions?: PermissionsDto;
  profilePhoto?: string;
};

