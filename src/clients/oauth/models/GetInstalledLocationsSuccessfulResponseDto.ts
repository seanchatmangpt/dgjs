/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstalledLocationSchema } from './InstalledLocationSchema';
export type GetInstalledLocationsSuccessfulResponseDto = {
  locations?: Array<InstalledLocationSchema>;
  /**
   * Total location count under the company
   */
  count?: number;
  /**
   * Boolean to control if user wants app to be automatically installed to future locations
   */
  installToFutureLocations?: boolean;
};

