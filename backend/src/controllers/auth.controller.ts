import { Request, Response } from "express";

import ApiResponse from "../utils/ApiResponse";

import { registerSchema } from "../schemas/auth.schema";
import { loginSchema } from "../schemas/login.schema";

import { registerUser, loginUser } from "../services/auth.service";

export const register = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = registerSchema.parse(req.body);

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

export const login = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = loginSchema.parse(req.body);

    const result = await loginUser(data);

    res.status(200).json(new ApiResponse("Login successful", result));
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};