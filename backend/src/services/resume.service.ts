import fs from "fs/promises";

import prisma from "../prisma/client";
import ApiError from "../utils/ApiError";
import extractPdf from "../utils/extractPdf";

export const uploadResume = async (
  userId: string,
  file: Express.Multer.File
) => {
  if (!file) {
    throw new ApiError(400, "Resume file is required");
  }

  // Extract text from uploaded PDF
  const extractedText = await extractPdf(file.path);

  // Check if the user already has a resume
  const existingResume = await prisma.resume.findUnique({
    where: {
      userId,
    },
  });

  // Remove previous resume (one active resume per user)
  if (existingResume) {
    await prisma.resume.delete({
      where: {
        userId,
      },
    });
  }

  // Save the new resume
  const resume = await prisma.resume.create({
    data: {
      fileName: file.originalname,
      extractedText,
      userId,
    },
  });

  // Delete uploaded PDF after extraction
  try {
    await fs.unlink(file.path);
  } catch (error) {
    console.warn("Unable to delete uploaded file:", error);
  }

  return resume;
};