import prisma from "../prisma/client";

export const getAnalysisById = async (analysisId: string) => {
  const analysis = await prisma.analysis.findUnique({
    where: {
      id: analysisId,
    },
    include: {
      resume: {
        select: {
          fileName: true,
          uploadedAt: true,
        },
      },
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  if (!analysis) {
    throw new Error("Analysis not found.");
  }

  return analysis;
};