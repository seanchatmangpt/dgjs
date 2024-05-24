/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePostSuccessfulResponseDTO } from '../models/CreatePostSuccessfulResponseDTO';
import type { DeletePostSuccessfulResponseDTO } from '../models/DeletePostSuccessfulResponseDTO';
import type { GetPostSuccessfulResponseDTO } from '../models/GetPostSuccessfulResponseDTO';
import type { PostCreateRequest } from '../models/PostCreateRequest';
import type { PostSuccessfulResponseDTO } from '../models/PostSuccessfulResponseDTO';
import type { SearchPostDTO } from '../models/SearchPostDTO';
import type { UpdatePostSuccessfulResponseDTO } from '../models/UpdatePostSuccessfulResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostService {
  /**
   * Get posts
   * Get Posts
   * @returns PostSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static getPosts({
    authorization,
    version,
    locationId,
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
     * Location Id
     */
    locationId: string,
    requestBody: SearchPostDTO,
  }): CancelablePromise<PostSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/social-media-posting/{locationId}/posts/list',
      path: {
        'locationId': locationId,
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
   * Create post
   * Create all supported platform posts. The content and media limitations and platform rate limiters corresponding to the respective platforms is provided in the following reference link:
   *
   * Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations "Social Planner Help")
   * @returns CreatePostSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static createPost({
    authorization,
    version,
    locationId,
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
     * Location Id
     */
    locationId: string,
    requestBody: PostCreateRequest,
  }): CancelablePromise<CreatePostSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/social-media-posting/{locationId}/posts',
      path: {
        'locationId': locationId,
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
   * Get post
   * Get post
   * @returns GetPostSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static getPost({
    authorization,
    version,
    locationId,
    id,
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
     * Post Id
     */
    id: string,
  }): CancelablePromise<GetPostSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/social-media-posting/{locationId}/posts/{id}',
      path: {
        'locationId': locationId,
        'id': id,
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
   * Edit post
   * Create all supported platform posts. The content and media limitations and platform rate limiters corresponding to the respective platforms is provided in the following reference link:
   *
   * Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations "Social Planner Help")
   * @returns UpdatePostSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static editPost({
    authorization,
    version,
    locationId,
    id,
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
     * Location Id
     */
    locationId: string,
    /**
     * Post Id
     */
    id: string,
    requestBody: PostCreateRequest,
  }): CancelablePromise<UpdatePostSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/social-media-posting/{locationId}/posts/{id}',
      path: {
        'locationId': locationId,
        'id': id,
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
   * Delete Post
   * Delete Post
   * @returns DeletePostSuccessfulResponseDTO Successful response
   * @throws ApiError
   */
  public static deletePost({
    authorization,
    version,
    locationId,
    id,
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
     * Post Id
     */
    id: string,
  }): CancelablePromise<DeletePostSuccessfulResponseDTO> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/social-media-posting/{locationId}/posts/{id}',
      path: {
        'locationId': locationId,
        'id': id,
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
