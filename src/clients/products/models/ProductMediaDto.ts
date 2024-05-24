/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProductMediaDto = {
  /**
   * The unique identifier for the media.
   */
  id: string;
  /**
   * The title of the media file.
   */
  title?: string;
  /**
   * The URL where the media file is stored.
   */
  url: string;
  /**
   * The type of the media file (e.g., image, video will be supporting soon).
   */
  type: ProductMediaDto.type;
  /**
   * Indicates whether the media is featured.
   */
  isFeatured?: boolean;
};
export namespace ProductMediaDto {
  /**
   * The type of the media file (e.g., image, video will be supporting soon).
   */
  export enum type {
    IMAGE = 'image',
    VIDEO = 'video',
  }
}

