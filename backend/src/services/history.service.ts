import prisma from "../prisma/client";

export const getAnalysisHistory = async (userId: string) => {
  return prisma.analysis.findMany({
    where: {
      userId,
    },
    include: {
      resume: {
        select: {
          fileName: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};