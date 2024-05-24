/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetFilesResponseDTO } from '../models/GetFilesResponseDTO';
import type { UploadFileResponseDTO } from '../models/UploadFileResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
  /**
   * Get List of Files
   * Fetches list of files and folders from the media library
   * @returns GetFilesResponseDTO Successful response
   * @throws ApiError
   */
  public static fetchMediaContent({
    authorization,
    sortBy,
    sortOrder,
    altType,
    altId,
    offset,
    limit,
    type,
    query,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    /**
     * Field to sorting the file listing by
     */
    sortBy: string,
    /**
     * Direction in which file needs to be sorted
     */
    sortOrder: string,
    /**
     * AltType
     */
    altType: 'agency' | 'location',
    /**
     * location or agency Id
     */
    altId: string,
    /**
     * Number of files to skip in listing
     */
    offset?: string,
    /**
     * Number of files to show in the listing
     */
    limit?: string,
    /**
     * Type
     */
    type?: string,
    /**
     * Query text
     */
    query?: string,
  }): CancelablePromise<GetFilesResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/medias/files',
      headers: {
        'Authorization': authorization,
      },
      query: {
        'offset': offset,
        'limit': limit,
        'sortBy': sortBy,
        'sortOrder': sortOrder,
        'type': type,
        'query': query,
        'altType': altType,
        'altId': altId,
      },
    });
  }
  /**
   * Upload File into Media Library
   * If hosted is set to true then fileUrl is required. Else file is required. If adding a file, maximum allowed is 25 MB
   * @returns UploadFileResponseDTO Successful response
   * @throws ApiError
   */
  public static uploadMediaContent({
    authorization,
    formData,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    formData: {
      file?: Blob;
      hosted?: boolean;
      fileUrl?: string;
      name?: string;
    },
  }): CancelablePromise<UploadFileResponseDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/medias/upload-file',
      headers: {
        'Authorization': authorization,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }
  /**
   * Delete File or Folder
   * Deletes specific file or folder from the media library
   * @returns any Successful response
   * @throws ApiError
   */
  public static deleteMediaContent({
    authorization,
    id,
    altType,
    altId,
  }: {
    /**
     * Access Token
     */
    authorization: string,
    id: string,
    /**
     * AltType
     */
    altType: 'agency' | 'location',
    /**
     * location or agency Id
     */
    altId: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/medias/{id}',
      path: {
        'id': id,
      },
      headers: {
        'Authorization': authorization,
      },
      query: {
        'altType': altType,
        'altId': altId,
      },
    });
  }
}
