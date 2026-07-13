import { Request, Response } from "express";

import asyncHandler from "../utils/asyncHandler";
import ApiResponse from "../utils/ApiResponse";

import { registerSchema } from "../schemas/auth.schema";
import { loginSchema } from "../schemas/login.schema";

import {
  registerUser,
  loginUser,
} from "../services/auth.service";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const validatedData = registerSchema.parse(req.body);

  const user = await registerUser(validatedData);

  res
    .status(201)
    .json(new ApiResponse("User registered successfully", user));
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const validatedData = loginSchema.parse(req.body);

  const result = await loginUser(validatedData);

  res
    .status(200)
    .json(new ApiResponse("Login successful", result));
});