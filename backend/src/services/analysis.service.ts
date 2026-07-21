import prisma from "../prisma/client";
import { generateATSAnalysis } from "./ai.service";

interface AnalyzeResumeInput {
  resumeId: string;
  userId: string;
  jobDescription: string;
}

export const analyzeResume = async ({
  resumeId,
  userId,
  jobDescription,
}: AnalyzeResumeInput) => {

  // Find uploaded resume
  const resume = await prisma.resume.findUnique({
    where: {
      id: resumeId,
    },
  });

  if (!resume) {
    throw new Error("Resume not found");
  }

  // Mock AI Response
  const aiAnalysis = await generateATSAnalysis(
    resume.extractedText,
    jobDescription
  );

  // Save analysis
  const analysis = await prisma.analysis.create({
    data: {
      atsScore: aiAnalysis.atsScore,
      matchPercentage: aiAnalysis.matchPercentage,
      skillsFound: aiAnalysis.skillsFound,
      missingKeywords: aiAnalysis.missingKeywords,
      strengths: aiAnalysis.strengths,
      weaknesses: aiAnalysis.weaknesses,
      suggestions: aiAnalysis.suggestions,
      jobDescription,
      userId,
      resumeId,
    },
  });
  return analysis;
}