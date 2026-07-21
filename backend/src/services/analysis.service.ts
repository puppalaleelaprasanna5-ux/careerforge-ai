import prisma from "../prisma/client";

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
  const mockAnalysis = {
    atsScore: 82,
    matchPercentage: 78,

    skillsFound: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],

    missingKeywords: [
      "Docker",
      "Redis",
      "AWS",
    ],

    strengths: [
      "Strong Full Stack background",
      "Good project experience",
    ],

    weaknesses: [
      "No cloud deployment experience",
      "No testing frameworks mentioned",
    ],

    suggestions: [
      "Learn Docker",
      "Deploy projects",
      "Add measurable achievements",
    ],
  };

  // Save analysis
  const analysis = await prisma.analysis.create({
    data: {
      atsScore: mockAnalysis.atsScore,
      matchPercentage: mockAnalysis.matchPercentage,

      skillsFound: mockAnalysis.skillsFound,
      missingKeywords: mockAnalysis.missingKeywords,
      strengths: mockAnalysis.strengths,
      weaknesses: mockAnalysis.weaknesses,
      suggestions: mockAnalysis.suggestions,

      jobDescription,

      userId,
      resumeId,
    },
  });

  return analysis;
};