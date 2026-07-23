export interface Resume {
  id: string;
  filename: string;
  uploadedAt: string;
  sizeKb: number;
  status: "analyzed" | "processing" | "failed";
}

export interface Analysis {
  id: string;
  resumeId: string;
  resumeName: string;
  jobTitle: string;
  company?: string;
  createdAt: string;
  atsScore: number;
  matchPercent: number;
  skillsFound: string[];
  missingKeywords: string[];
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  summary: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  plan: "Free" | "Pro" | "Team";
  joinedAt: string;
}
