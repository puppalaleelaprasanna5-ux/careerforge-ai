import { Request, Response } from "express";

import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";

import { getDashboard } from "../services/dashboard.service";

export const dashboard = asyncHandler(
  async (req: Request, res: Response) => {

    /**
     * Temporary
     * Will be replaced by req.user.id
     * after JWT middleware.
     */
    const { userId } = req.query;

    if (!userId || typeof userId !== "string") {
      throw new ApiError(400, "User ID is required.");
    }

    const data = await getDashboard(userId);

    res.status(200).json(
      new ApiResponse(
        "Dashboard fetched successfully.",
        data
      )
    );
  }
);