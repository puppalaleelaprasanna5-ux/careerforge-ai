import { Request, Response } from "express";

import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";

import { getAnalysisById } from "../services/analysisDetails.service";

export const getAnalysis = asyncHandler(
  async (req: Request, res: Response) => {

    const id = req.params.id as string;

    if (!id) {
      throw new ApiError(400, "Analysis ID is required.");
    }

    const analysis = await getAnalysisById(id);

    res.status(200).json(
      new ApiResponse(
        "Analysis fetched successfully.",
        analysis
      )
    );
  }
);