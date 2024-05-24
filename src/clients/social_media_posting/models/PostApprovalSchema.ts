/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PostApprovalSchema = {
  /**
   * Approver
   */
  approver?: string;
  /**
   * Requester Notes
   */
  requesterNote?: string;
  /**
   * Approver Notes
   */
  approverNote?: string;
  /**
   * Approval Status must be one of the following values: pending, approved, rejected, not_required
   */
  approvalStatus?: Record<string, any>;
};

