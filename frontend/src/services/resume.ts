// Placeholder service layer — wire to real Express + Prisma backend later.
import type { Analysis, Resume } from "@/types";
import { analyses, resumes } from "@/lib/placeholder-data";

export async function listResumes(): Promise<Resume[]> {
  return resumes;
}

export async function listAnalyses(): Promise<Analysis[]> {
  return analyses;
}

export async function getAnalysis(id: string): Promise<Analysis | undefined> {
  return analyses.find((a) => a.id === id);
}

export async function uploadResume(_file: File, _jd: string): Promise<{ analysisId: string }> {
  // TODO: replace with real API call.
  return { analysisId: analyses[0].id };
}
