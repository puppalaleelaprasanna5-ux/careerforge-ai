import { Request, Response } from "express";
import { registerSchema } from "../schemas/auth.schema";
import { registerUser } from "../services/auth.service";
import ApiResponse from "../utils/ApiResponse";
export const register = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Validate request
    const data = registerSchema.parse(req.body);

    // Register user
    const user = await registerUser(data);

    res
      .status(201)
      .json(new ApiResponse("User registered successfully", user));
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};