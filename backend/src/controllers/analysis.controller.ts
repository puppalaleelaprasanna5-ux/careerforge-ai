import { Request, Response } from "express";

import asyncHandler from "../utils/asyncHandler";
import ApiResponse from "../utils/ApiResponse";
import ApiError from "../utils/ApiError";

import { analyzeResume } from "../services/analysis.service";

export const analyze = asyncHandler(async (req: Request, res: Response) => {
  const { resumeId, userId, jobDescription } = req.body;

  if (!resumeId || !userId || !jobDescription) {
    throw new ApiError(
      400,
      "resumeId, userId and jobDescription are required."
    );
  }

  const analysis = await analyzeResume({
    resumeId,
    userId,
    jobDescription,
  });

  res.status(201).json(
    new ApiResponse(
      "Resume analyzed successfully.",
      analysis
    )
  );
});