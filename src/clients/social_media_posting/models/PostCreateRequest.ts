/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GMBPostSchema } from './GMBPostSchema';
import type { OgTagsSchema } from './OgTagsSchema';
import type { PostApprovalSchema } from './PostApprovalSchema';
import type { PostMediaSchema } from './PostMediaSchema';
import type { RecurringPostDetailsSchema } from './RecurringPostDetailsSchema';
import type { TiktokPostSchema } from './TiktokPostSchema';
export type PostCreateRequest = {
  /**
   * User Ids
   */
  userIds: Array<string>;
  /**
   * Post Content
   * The limitations of content as per the platforms is provided through the reference link in API description
   */
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
  /**
   * Schedule Date
   */
  scheduleDate?: string;
  /**
   * Created By
   */
  createdBy?: string;
  /**
   * Follow Up Comment
   */
  followUpComment?: string;
  /**
   * Og Tags Meta Data
   */
  ogTagsDetails?: OgTagsSchema;
  /**
   * Post Type must be one of the following values: - post, story, reel
   */
  type: Record<string, any>;
  /**
   * Post Approval Details
   */
  postApprovalDetails?: PostApprovalSchema;
  /**
   * Recurring Post Details
   */
  recurringDetails?: RecurringPostDetailsSchema;
  /**
   * if schedule datetime is updated
   */
  scheduleTimeUpdated?: boolean;
  /**
   * Array of Tag Value
   */
  tags?: Array<string>;
  /**
   * Category Id
   */
  categoryId?: string;
  /**
   * Watermark template Id
   */
  watermarkTemplateId?: string;
  /**
   * Is Watermark Applied
   */
  applyWatermark?: boolean;
  /**
   * Tiktok Post Details
   */
  tiktokPostDetails?: TiktokPostSchema;
  /**
   * GMB Post Details
   */
  gmbPostDetails?: GMBPostSchema;
  /**
   * User ID
   */
  userId?: string;
  /**
   * Company ID
   */
  companyId?: string;
  /**
   * Timezone
   */
  timezone?: string;
};

