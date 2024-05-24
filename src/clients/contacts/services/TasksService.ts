/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTaskParams } from '../models/CreateTaskParams';
import type { DeleteTaskSuccessfulResponseDto } from '../models/DeleteTaskSuccessfulResponseDto';
import type { TaskByIsSuccessfulResponseDto } from '../models/TaskByIsSuccessfulResponseDto';
import type { TasksListSuccessfulResponseDto } from '../models/TasksListSuccessfulResponseDto';
import type { UpdateTaskBody } from '../models/UpdateTaskBody';
import type { UpdateTaskStatusParams } from '../models/UpdateTaskStatusParams';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TasksService {
  /**
   * Get all Tasks
   * Get all Tasks
   * @returns TasksListSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getAllTasks({
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
  }): CancelablePromise<TasksListSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contacts/{contactId}/tasks',
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
      },
    });
  }
  /**
   * Create Task
   * Create Task
   * @returns TaskByIsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static createTask({
    authorization,
    version,
    contactId,
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
    requestBody: CreateTaskParams,
  }): CancelablePromise<TaskByIsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contacts/{contactId}/tasks',
      path: {
        'contactId': contactId,
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
   * Get Task
   * Get Task
   * @returns TaskByIsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static getTask({
    authorization,
    version,
    contactId,
    taskId,
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
     * Task Id
     */
    taskId: string,
  }): CancelablePromise<TaskByIsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contacts/{contactId}/tasks/{taskId}',
      path: {
        'contactId': contactId,
        'taskId': taskId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Update Task
   * Update Task
   * @returns TaskByIsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static updateTask({
    authorization,
    version,
    contactId,
    taskId,
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
     * Task Id
     */
    taskId: string,
    requestBody: UpdateTaskBody,
  }): CancelablePromise<TaskByIsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/contacts/{contactId}/tasks/{taskId}',
      path: {
        'contactId': contactId,
        'taskId': taskId,
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
   * Delete Task
   * Delete Task
   * @returns DeleteTaskSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static deleteTask({
    authorization,
    version,
    contactId,
    taskId,
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
     * Task Id
     */
    taskId: string,
  }): CancelablePromise<DeleteTaskSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contacts/{contactId}/tasks/{taskId}',
      path: {
        'contactId': contactId,
        'taskId': taskId,
      },
      headers: {
        'Authorization': authorization,
        'Version': version,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Update Task Completed
   * Update Task Completed
   * @returns TaskByIsSuccessfulResponseDto Successful response
   * @throws ApiError
   */
  public static updateTaskCompleted({
    authorization,
    version,
    contactId,
    taskId,
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
     * Task Id
     */
    taskId: string,
    requestBody: UpdateTaskStatusParams,
  }): CancelablePromise<TaskByIsSuccessfulResponseDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/contacts/{contactId}/tasks/{taskId}/completed',
      path: {
        'contactId': contactId,
        'taskId': taskId,
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
