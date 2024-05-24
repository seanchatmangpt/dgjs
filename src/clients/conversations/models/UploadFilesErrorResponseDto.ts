/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UploadFilesErrorResponseDto = {
  /**
   * HTTP Status code of the request
   */
  status: UploadFilesErrorResponseDto.status;
  /**
   * Error message of the request
   */
  message: string;
};
export namespace UploadFilesErrorResponseDto {
  /**
   * HTTP Status code of the request
   */
  export enum status {
    '_400' = 400,
    '_413' = 413,
    '_415' = 415,
  }
}

