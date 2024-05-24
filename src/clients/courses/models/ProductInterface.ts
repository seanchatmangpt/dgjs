/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryInterface } from './CategoryInterface';
import type { InstructorDetails } from './InstructorDetails';
export type ProductInterface = {
  title: string;
  description: string;
  imageUrl?: string;
  categories: Array<CategoryInterface>;
  instructorDetails?: InstructorDetails;
};

