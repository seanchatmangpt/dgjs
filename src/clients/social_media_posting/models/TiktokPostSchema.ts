/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TiktokPostSchema = {
  /**
   * privacy level must be one of the following values: PUBLIC_TO_EVERYONE, MUTUAL_FOLLOW_FRIENDS, SELF_ONLY
   */
  privacyLevel?: string;
  /**
   * promote other brand
   */
  promoteOtherBrand?: boolean;
  /**
   * enable comment
   */
  enableComment?: boolean;
  /**
   * enable duet
   */
  enableDuet?: boolean;
  /**
   * enable stitch
   */
  enableStitch?: boolean;
  /**
   * video disclosure
   */
  videoDisclosure?: boolean;
  /**
   * promote your brand
   */
  promoteYourBrand?: boolean;
};

