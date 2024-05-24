/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefaultProductResponseDto } from './DefaultProductResponseDto';
import type { ListProductsStats } from './ListProductsStats';
export type ListProductsResponseDto = {
  /**
   * An array of products
   */
  products: Array<DefaultProductResponseDto>;
  /**
   * list products status
   */
  total: Array<ListProductsStats>;
};

