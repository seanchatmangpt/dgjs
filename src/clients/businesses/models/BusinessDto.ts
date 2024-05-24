/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessCreatedByOrUpdatedBy } from './BusinessCreatedByOrUpdatedBy';
export type BusinessDto = {
  /**
   * Business Id
   */
  id: string;
  /**
   * Business Name
   */
  name: string;
  /**
   * phone number
   */
  phone?: string;
  /**
   * email
   */
  email?: string;
  /**
   * website
   */
  website?: string;
  /**
   * address
   */
  address?: string;
  /**
   * city
   */
  city?: string;
  /**
   * description
   */
  description?: string;
  /**
   * state
   */
  state?: string;
  /**
   * postal code
   */
  postalCode?: string;
  /**
   * country
   */
  country?: string;
  /**
   * updated By
   */
  updatedBy?: BusinessCreatedByOrUpdatedBy;
  /**
   * locaitonId
   */
  locationId: string;
  /**
   * Created By
   */
  createdBy?: BusinessCreatedByOrUpdatedBy;
  /**
   * Creation Time
   */
  createdAt?: string;
  /**
   * Last updation time
   */
  updatedAt?: string;
};

