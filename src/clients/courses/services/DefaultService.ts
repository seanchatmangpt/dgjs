/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublicExporterPayload } from '../models/PublicExporterPayload';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
  /**
   * Import Courses
   * Import Courses through public channels
   * @returns any
   * @throws ApiError
   */
  public static importCourses({
    authorization,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    requestBody: PublicExporterPayload,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/courses/courses-exporter/public/import',
      headers: {
        'Authorization': authorization,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
