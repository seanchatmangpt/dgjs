/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateWhitelabelIntegrationResponseDto = {
  /**
   * The unique identifier of the integration provider.
   */
  _id: string;
  /**
   * The altId / locationId of the integration provider.
   */
  altId: string;
  /**
   * The altType of the integration provider.
   */
  altType: string;
  /**
   * The title or name of the integration provider.
   */
  title: string;
  /**
   * The route name associated with the integration provider.
   */
  route: string;
  /**
   * The payment provider associated with the integration provider.
   */
  provider: string;
  /**
   * A brief description providing additional information about the integration provider.
   */
  description: string;
  /**
   * The URL to an image representing the integration provider.
   */
  imageUrl: string;
  /**
   * The timestamp when the integration provider was created.
   */
  createdAt: string;
  /**
   * The timestamp when the integration provider was last updated.
   */
  updatedAt: string;
};

