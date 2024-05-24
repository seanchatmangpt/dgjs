/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GMBPostSchema } from './GMBPostSchema';
import type { OgTagsSchema } from './OgTagsSchema';
import type { PostApprovalSchema } from './PostApprovalSchema';
import type { PostMediaSchema } from './PostMediaSchema';
import type { RecurringPostSchema } from './RecurringPostSchema';
import type { TiktokPostSchema } from './TiktokPostSchema';
export type GetPostFormattedSchema = {
  _id?: string;
  /**
   * source must be one of the following values: composer, recurring, csv
   */
  source?: GetPostFormattedSchema.source;
  /**
   * Location Id
   */
  locationId: string;
  /**
   * platform must be one of the following values: google, facebook, instagram, linkedin, twitter, tiktok
   */
  platform?: string;
  traceId?: string;
  displayDate?: string;
  createdAt?: string;
  updatedAt?: string;
  /**
   * Account Id
   */
  accountId?: string;
  defaultThumb?: string;
  /**
   * Error
   */
  error: string;
  postId?: string;
  previewLink?: string;
  primaryImage?: string;
  publishedAt?: string;
  thumbnail?: string;
  subscriptionStatus?: string;
  /**
   * User Ids
   */
  userIds: Array<string>;
  summary?: string;
  /**
   * Post Media Data
   * The limitations of media as per the platforms is provided through the reference link in API description
   */
  media?: Array<PostMediaSchema>;
  /**
   * Status must be one of the following values: in_progress, draft, failed, published, scheduled, in_review, notification_sent, deleted
   */
  status?: Record<string, any>;
  createdBy?: string;
  /**
   * Post Type must be one of the following values: - post, story, reel
   */
  type: Record<string, any>;
  /**
   * if schedule datetime is updated
   */
  scheduleTimeUpdated?: boolean;
  /**
   * Tag Ids
   */
  tags?: Array<string>;
  /**
   * Og Tags Meta Data
   */
  ogTagsDetails?: OgTagsSchema;
  /**
   * Post Approval Details
   */
  postApprovalDetails?: PostApprovalSchema;
  /**
   * Recurring Post Details
   */
  recurringDetails?: RecurringPostSchema;
  /**
   * Tiktok Post Details
   */
  tiktokPostDetails?: TiktokPostSchema;
  /**
   * GMB Post Details
   */
  gmbPostDetails?: GMBPostSchema;
};
export namespace GetPostFormattedSchema {
  /**
   * source must be one of the following values: composer, recurring, csv
   */
  export enum source {
    COMPOSER = 'composer',
    CSV = 'csv',
    RECURRING = 'recurring',
    REVIEW = 'review',
    RSS = 'rss',
  }
}

