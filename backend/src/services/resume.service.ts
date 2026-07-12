import fs from "fs/promises";

import prisma from "../prisma/client";
import ApiError from "../utils/ApiError";
import extractPdfText from "../utils/extractPdf";

export const uploadResume = async (
  userId: string,
  file: Express.Multer.File
) => {
  if (!file) {
    throw new ApiError(400, "Resume file is required");
  }

  // Extract text from PDF
  const extractedText = await extractPdfText(file.path);

  // Check if user already has a resume
  const existingResume = await prisma.resume.findFirst({
    where: {
      userId,
    },
  });

  // Delete old resume record (one active resume per user)
  if (existingResume) {
    await prisma.resume.delete({
      where: {
        id: existingResume.id,
      },
    });
  }

  // Save new resume
  const resume = await prisma.resume.create({
    data: {
      userId,
      fileName: file.originalname,
      extractedText,
    },
  });

  // Delete uploaded file after processing
  await fs.unlink(file.path);

  return resume;
};