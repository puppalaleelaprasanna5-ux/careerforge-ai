import prisma from "../prisma/client";

export const getDashboard = async (userId: string) => {

  const totalResumes = await prisma.resume.count({
    where: {
      userId,
    },
  });

  const totalAnalyses = await prisma.analysis.count({
    where: {
      userId,
    },
  });

  const analyses = await prisma.analysis.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const averageATS =
    analyses.length === 0
      ? 0
      : Math.round(
        analyses.reduce(
          (sum, analysis) => sum + analysis.atsScore,
          0
        ) / analyses.length
      );

  const latestAnalysis = analyses[0] ?? null;

  return {
    totalResumes,
    totalAnalyses,
    averageATS,
    latestAnalysis,
  };
};