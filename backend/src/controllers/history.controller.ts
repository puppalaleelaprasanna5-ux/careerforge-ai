import { Request, Response } from "express";

import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";

import { getAnalysisHistory } from "../services/history.service";

export const history = asyncHandler(async (req: Request, res: Response) => {
  /**
   * Temporary
   * Replace with req.user.id
   * after JWT authentication.
   */
  const { userId } = req.query;

  if (!userId || typeof userId !== "string") {
    throw new ApiError(400, "User ID is required.");
  }

  const analyses = await getAnalysisHistory(userId);

  res.status(200).json(
    new ApiResponse(
      "Analysis history fetched successfully.",
      analyses
    )
  );
});