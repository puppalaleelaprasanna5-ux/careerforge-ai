import { Request, Response } from "express";

import asyncHandler from "../utils/asyncHandler";
import ApiResponse from "../utils/ApiResponse";
import ApiError from "../utils/ApiError";

import { uploadResume } from "../services/resume.service";

export const upload = asyncHandler(
  async (req: Request, res: Response) => {
    const file = req.file;

    if (!file) {
      throw new ApiError(400, "Please upload a PDF resume");
    }

    // Temporary user ID until JWT middleware is added
    const userId = req.body.userId;

    if (!userId) {
      throw new ApiError(400, "User ID is required");
    }

    const resume = await uploadResume(userId, file);

    res.status(201).json(
      new ApiResponse(
        "Resume uploaded successfully",
        resume
      )
    );
  }
);