/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { contentType } from './contentType';
import type { PostMaterialInterface } from './PostMaterialInterface';
import type { visibility } from './visibility';
export type PostInterface = {
  title: string;
  visibility: visibility;
  thumbnailUrl?: string;
  contentType: contentType;
  description: string;
  bucketVideoUrl?: string;
  postMaterials?: Array<PostMaterialInterface>;
};

