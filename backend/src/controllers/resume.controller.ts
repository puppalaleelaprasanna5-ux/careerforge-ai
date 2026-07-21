import { Request, Response } from "express";

import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";

import { uploadResume } from "../services/resume.service";

export const upload = asyncHandler(async (req: Request, res: Response) => {
  const file = req.file;

  if (!file) {
    throw new ApiError(400, "Please upload a PDF resume.");
  }

  /**
   * Temporary
   * We'll replace this with req.user.id
   * after JWT middleware is added.
   */
  const userId = req.body.userId;

  if (!userId) {
    throw new ApiError(400, "User ID is required.");
  }

  const resume = await uploadResume(userId, file);

  res.status(201).json(
    new ApiResponse(
      "Resume uploaded successfully.",
      resume
    )
  );
});