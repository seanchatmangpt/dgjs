/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateWhiteLabelIntegrationProviderDto = {
  /**
   * location Id / company Id based on altType
   */
  altId: string;
  /**
   * Alt Type
   */
  altType: CreateWhiteLabelIntegrationProviderDto.altType;
  /**
   * A unique name given to the integration provider, uniqueName must start and end with a character. Only lowercase characters and hyphens (-) are supported
   */
  uniqueName: string;
  /**
   * The title or name of the integration provider.
   */
  title: string;
  /**
   * The type of payment provider associated with the integration provider.
   */
  provider: CreateWhiteLabelIntegrationProviderDto.provider;
  /**
   * A brief description providing additional information about the integration provider.
   */
  description: string;
  /**
   * The URL to an image representing the integration provider. The imageUrl should start with "https://" and ensure that this URL is publicly accessible.
   */
  imageUrl: string;
};
export namespace CreateWhiteLabelIntegrationProviderDto {
  /**
   * Alt Type
   */
  export enum altType {
    LOCATION = 'location',
  }
  /**
   * The type of payment provider associated with the integration provider.
   */
  export enum provider {
    AUTHORIZE_NET = 'authorize-net',
    NMI = 'nmi',
  }
}

