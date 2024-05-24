/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachFBAccountDTO } from '../models/AttachFBAccountDTO';
import type { GetFacebookAccountsResponseDTO } from '../models/GetFacebookAccountsResponseDTO';
import type { SocialMediaFBAccountResponseDTO } from '../models/SocialMediaFBAccountResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OauthFacebookService {
  /**
   * Starts OAuth For Facebook Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Facebook login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function.
   * ### Sample code to listen to event data:
   * window.addEventListener('message',
   * function(e) {
     * if (e.data && e.data.page === 'social_media_posting') {
       * const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
       * }
       * },
       * false)
       * ### Event Data Response:
       * {
         * actionType: string,            Ex: "close"
         * page: string,                  Ex: "social-media-posting"
         * platform: string,              Ex: "facebook"
         * placement: string,             Ex: "placement"
         * accountId: string,             Ex: "658a9b6833b91e0ecb8f3958"
         * reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"]
         * }
         * ### The accountId retrieved from above data can be used to fetch Facebook account details using below API -
         * API: '/social-media-posting/oauth/facebook/accounts/:accountId'
         *
         * Method: GET
         * @returns any Successful Response
         * @throws ApiError
         */
        public static startFacebookOauth({
          authorization,
          version,
          locationId,
          userId,
          page,
          reconnect,
        }: {
          /**
           * Access Token
           */
          authorization: string,
          /**
           * API Version
           */
          version: '2021-07-28',
          /**
           * Account Location Id
           */
          locationId: string,
          /**
           * Facebook Account Id
           */
          userId: string,
          /**
           * Facebook Page
           */
          page?: string,
          /**
           * Reconnect boolean as string
           */
          reconnect?: string,
        }): CancelablePromise<any> {
          return __request(OpenAPI, {
            method: 'GET',
            url: '/social-media-posting/oauth/facebook/start',
            headers: {
              'Authorization': authorization,
              'Version': version,
            },
            query: {
              'locationId': locationId,
              'userId': userId,
              'page': page,
              'reconnect': reconnect,
            },
            errors: {
              400: `Bad Request`,
              401: `Unauthorized`,
              422: `Unprocessable Entity`,
            },
          });
        }
        /**
         * Get facebook pages
         * Get facebook pages
         * @returns GetFacebookAccountsResponseDTO Successful response, runs Facebook OAuth and redirects to application
         * @throws ApiError
         */
        public static getFacebookPageGroup({
          authorization,
          version,
          locationId,
          accountId,
        }: {
          /**
           * Access Token
           */
          authorization: string,
          /**
           * API Version
           */
          version: '2021-07-28',
          /**
           * Account Location Id
           */
          locationId: string,
          /**
           * Account Id
           */
          accountId: string,
        }): CancelablePromise<GetFacebookAccountsResponseDTO> {
          return __request(OpenAPI, {
            method: 'GET',
            url: '/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}',
            path: {
              'locationId': locationId,
              'accountId': accountId,
            },
            headers: {
              'Authorization': authorization,
              'Version': version,
            },
            errors: {
              400: `Bad Request`,
              401: `Unauthorized`,
              422: `Unprocessable Entity`,
            },
          });
        }
        /**
         * Attach facebook pages
         * Attach facebook pages
         * @returns SocialMediaFBAccountResponseDTO Successful response
         * @throws ApiError
         */
        public static attachFacebookPageGroup({
          authorization,
          version,
          locationId,
          accountId,
          requestBody,
        }: {
          /**
           * Access Token
           */
          authorization: string,
          /**
           * API Version
           */
          version: '2021-07-28',
          /**
           * Account Location Id
           */
          locationId: string,
          /**
           * Account Id
           */
          accountId: string,
          requestBody: AttachFBAccountDTO,
        }): CancelablePromise<SocialMediaFBAccountResponseDTO> {
          return __request(OpenAPI, {
            method: 'POST',
            url: '/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}',
            path: {
              'locationId': locationId,
              'accountId': accountId,
            },
            headers: {
              'Authorization': authorization,
              'Version': version,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
              400: `Bad Request`,
              401: `Unauthorized`,
              422: `Unprocessable Entity`,
            },
          });
        }
      }
