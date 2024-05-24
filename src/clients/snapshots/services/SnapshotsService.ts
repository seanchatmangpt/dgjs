/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSnapshotShareLinkRequestDTO } from '../models/CreateSnapshotShareLinkRequestDTO';
import type { CreateSnapshotShareLinkSuccessfulResponseDTO } from '../models/CreateSnapshotShareLinkSuccessfulResponseDTO';
import type { GetLatestSnapshotPushStatusSuccessfulResponseDTO } from '../models/GetLatestSnapshotPushStatusSuccessfulResponseDTO';
import type { GetSnapshotPushStatusSuccessfulResponseDTO } from '../models/GetSnapshotPushStatusSuccessfulResponseDTO';
import type { GetSnapshotsSuccessfulResponseDto } from '../models/GetSnapshotsSuccessfulResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SnapshotsService {
  /**
   * Get Snapshots
   * Get a list of all own and imported Snapshots
   * @returns GetSnapshotsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getCustomSnapshots({
    authorization,
    version,
    companyId,
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
     * Company Id
     */
    companyId: string,
  }): CancelablePromise<GetSnapshotsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/snapshots/',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'companyId': companyId,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Create Snapshot Share Link
   * Create a share link for snapshot
   * @returns CreateSnapshotShareLinkSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static createSnapshotShareLink({
    authorization,
    companyId,
    version,
    requestBody,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    companyId: string,
    /**
     * API Version
     */
    version: '2021-07-28',
    requestBody: CreateSnapshotShareLinkRequestDTO,
  }): CancelablePromise<CreateSnapshotShareLinkSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/snapshots/share/link',
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'companyId': companyId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Get Snapshot Push between Dates
   * Get list of sub-accounts snapshot pushed in time period
   * @returns GetSnapshotPushStatusSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static getSnapshotPush({
    authorization,
    snapshotId,
    companyId,
    from,
    to,
    lastDoc,
    limit,
    version,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    snapshotId: string,
    companyId: string,
    from: string,
    to: string,
    /**
     * Id for last document till what you want to skip
     */
    lastDoc: string,
    limit: string,
    /**
     * API Version
     */
    version: '2021-07-28',
  }): CancelablePromise<GetSnapshotPushStatusSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/snapshots/snapshot-status/{snapshotId}',
      path: {
        'snapshotId': snapshotId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'companyId': companyId,
        'from': from,
        'to': to,
        'lastDoc': lastDoc,
        'limit': limit,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Get Last Snapshot Push
   * Get Latest Snapshot Push Status for a location id
   * @returns GetLatestSnapshotPushStatusSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static getLatestSnapshotPush({
    authorization,
    companyId,
    snapshotId,
    locationId,
    version,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    companyId: string,
    snapshotId: string,
    locationId: string,
    /**
     * API Version
     */
    version: '2021-07-28',
  }): CancelablePromise<GetLatestSnapshotPushStatusSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/snapshots/snapshot-status/{snapshotId}/location/{locationId}',
      path: {
        'snapshotId': snapshotId,
        'locationId': locationId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      query: {
        'companyId': companyId,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
}
