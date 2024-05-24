/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostInterface } from './PostInterface';
import type { SubCategoryInterface } from './SubCategoryInterface';
import type { visibility } from './visibility';
export type CategoryInterface = {
  title: string;
  visibility: visibility;
  thumbnailUrl?: string;
  posts?: Array<PostInterface>;
  subCategories?: Array<SubCategoryInterface>;
};

