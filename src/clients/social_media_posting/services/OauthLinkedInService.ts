/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachLinkedinAccountDTO } from '../models/AttachLinkedinAccountDTO';
import type { GetLinkedInAccountsResponseDTO } from '../models/GetLinkedInAccountsResponseDTO';
import type { SocialMediaLinkedInAccountResponseDTO } from '../models/SocialMediaLinkedInAccountResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OauthLinkedInService {
  /**
   * Starts OAuth For LinkedIn Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to LinkedIn login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function.
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
         * platform: string,              Ex: "linkedin"
         * placement: string,             Ex: "placement"
         * accountId: string,             Ex: "658a9b6833b91e0ecb8f3958"
         * reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"]
         * }
         * ### The accountId retrieved from above data can be used to fetch LinkedIn account details using below API -
         * API: '/social-media-posting/oauth/linkedin/accounts/:accountId'
         *
         * Method: GET
         * @returns any Successful Response
         * @throws ApiError
         */
        public static startLinkedinOauth({
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
           * Location Id
           */
          locationId: string,
          /**
           * User Id
           */
          userId: string,
          /**
           * Page
           */
          page?: string,
          /**
           * Reconnect
           */
          reconnect?: string,
        }): CancelablePromise<any> {
          return __request(OpenAPI, {
            method: 'GET',
            url: '/social-media-posting/oauth/linkedin/start',
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
         * Get Linkedin pages and profile
         * Get Linkedin pages and profile
         * @returns GetLinkedInAccountsResponseDTO Successful response
         * @throws ApiError
         */
        public static getLinkedinPageProfile({
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
        }): CancelablePromise<GetLinkedInAccountsResponseDTO> {
          return __request(OpenAPI, {
            method: 'GET',
            url: '/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}',
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
         * Attach linkedin pages and profile
         * Attach linkedin pages and profile
         * @returns SocialMediaLinkedInAccountResponseDTO Successful response
         * @throws ApiError
         */
        public static attachLinkedinPageProfile({
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
          requestBody: AttachLinkedinAccountDTO,
        }): CancelablePromise<SocialMediaLinkedInAccountResponseDTO> {
          return __request(OpenAPI, {
            method: 'POST',
            url: '/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}',
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
