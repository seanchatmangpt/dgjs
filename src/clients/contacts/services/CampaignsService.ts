/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddContactToCampaignDto } from '../models/AddContactToCampaignDto';
import type { CreateDeleteCantactsCampaignsSuccessfulResponseDto } from '../models/CreateDeleteCantactsCampaignsSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CampaignsService {
  /**
   * Add Contact to Campaign
   * Add contact to Campaign
   * @returns CreateDeleteCantactsCampaignsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static addContactToCampaign({
    authorization,
    version,
    contactId,
    campaignId,
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
     * Contact Id
     */
    contactId: string,
    /**
     * Campaigns Id
     */
    campaignId: string,
    requestBody: AddContactToCampaignDto,
  }): CancelablePromise<CreateDeleteCantactsCampaignsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contacts/{contactId}/campaigns/{campaignId}',
      path: {
        'contactId': contactId,
        'campaignId': campaignId,
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
  /**
   * Remove Contact From Campaign
   * Remove Contact From Campaign
   * @returns CreateDeleteCantactsCampaignsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static removeContactFromCampaign({
    authorization,
    version,
    contactId,
    campaignId,
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
     * Contact Id
     */
    contactId: string,
    /**
     * Campaigns Id
     */
    campaignId: string,
  }): CancelablePromise<CreateDeleteCantactsCampaignsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contacts/{contactId}/campaigns/{campaignId}',
      path: {
        'contactId': contactId,
        'campaignId': campaignId,
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
   * Remove Contact From Every Campaign
   * Remove Contact From Every Campaign
   * @returns CreateDeleteCantactsCampaignsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static removeContactFromEveryCampaign({
    authorization,
    version,
    contactId,
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
     * Contact Id
     */
    contactId: string,
  }): CancelablePromise<CreateDeleteCantactsCampaignsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contacts/{contactId}/campaigns/removeAll',
      path: {
        'contactId': contactId,
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
}
