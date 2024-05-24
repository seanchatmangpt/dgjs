/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetSurveysSubmissionSuccessfulResponseDto } from '../models/GetSurveysSubmissionSuccessfulResponseDto';
import type { GetSurveysSuccessfulResponseDto } from '../models/GetSurveysSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SurveysService {
  /**
   * Get Surveys Submissions
   * Get Surveys Submissions
   * @returns GetSurveysSubmissionSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getSurveysSubmissions({
    authorization,
    version,
    locationId,
    page = 1,
    limit = 20,
    surveyId,
    q,
    startAt,
    endAt,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    locationId: string,
    /**
     * Page No. By default it will be 1
     */
    page?: number,
    /**
     * Limit Per Page records count. will allow maximum up to 100 and default will be 20
     */
    limit?: number,
    /**
     * Filter submission by survey id
     */
    surveyId?: string,
    /**
     * Filter by contactId, name, email or phone no.
     */
    q?: string,
    /**
     * Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD).
     */
    startAt?: string,
    /**
     * Get submission by ending of this date. By default it will be current date(YYYY-MM-DD).
     */
    endAt?: string,
  }): CancelablePromise<GetSurveysSubmissionSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/surveys/submissions',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'page': page,
        'limit': limit,
        'surveyId': surveyId,
        'q': q,
        'startAt': startAt,
        'endAt': endAt,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        422: `Unprocessable Entity`,
      },
    });
  }
  /**
   * Get Surveys
   * Get Surveys
   * @returns GetSurveysSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getSurveys({
    authorization,
    version,
    locationId,
    skip,
    limit = 10,
    type,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    locationId: string,
    skip?: number,
    /**
     * Limit Per Page records count. will allow maximum up to 50 and default will be 10
     */
    limit?: number,
    type?: string,
  }): CancelablePromise<GetSurveysSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/surveys/',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'locationId': locationId,
        'skip': skip,
        'limit': limit,
        'type': type,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
}
