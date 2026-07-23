import type { Analysis, Resume, UserProfile } from "@/types";

export const currentUser: UserProfile = {
  id: "u_01",
  name: "Alex Morgan",
  email: "alex.morgan@careerforge.ai",
  avatarUrl: undefined,
  plan: "Pro",
  joinedAt: "2025-03-12",
};

export const resumes: Resume[] = [
  { id: "r_01", filename: "Alex_Morgan_Senior_PM.pdf", uploadedAt: "2026-07-19T10:20:00Z", sizeKb: 214, status: "analyzed" },
  { id: "r_02", filename: "Alex_Morgan_Frontend_Engineer.pdf", uploadedAt: "2026-07-14T09:00:00Z", sizeKb: 189, status: "analyzed" },
  { id: "r_03", filename: "Alex_Morgan_Design_Lead.pdf", uploadedAt: "2026-07-02T16:42:00Z", sizeKb: 233, status: "analyzed" },
  { id: "r_04", filename: "Alex_Morgan_Growth_PM.pdf", uploadedAt: "2026-06-25T08:11:00Z", sizeKb: 197, status: "processing" },
  { id: "r_05", filename: "Alex_Morgan_Startup_CV.pdf", uploadedAt: "2026-06-11T12:05:00Z", sizeKb: 221, status: "analyzed" },
];

export const analyses: Analysis[] = [
  {
    id: "a_01",
    resumeId: "r_01",
    resumeName: "Alex_Morgan_Senior_PM.pdf",
    jobTitle: "Senior Product Manager",
    company: "Linear",
    createdAt: "2026-07-19T10:22:00Z",
    atsScore: 87,
    matchPercent: 82,
    skillsFound: ["Roadmapping", "SQL", "A/B Testing", "Figma", "Jira", "Stakeholder Mgmt", "OKRs", "Analytics"],
    missingKeywords: ["Amplitude", "Mixpanel", "PLG", "Retention modeling"],
    strengths: [
      "Strong quantitative impact statements with clear metrics",
      "Cross-functional leadership experience across 3+ orgs",
      "Consistent use of action verbs and outcomes",
    ],
    weaknesses: [
      "Summary section is generic — lacks unique positioning",
      "Limited evidence of product-led growth experience",
      "Skills section not tailored to the target JD",
    ],
    suggestions: [
      "Add a 2-line tailored summary mentioning PLG and retention",
      "Surface Amplitude/Mixpanel by describing analytics stack used",
      "Move most recent impact bullet to the top of each role",
    ],
    summary:
      "A strong senior PM profile with excellent quantitative storytelling. Tailoring the summary and analytics stack will push the ATS score above 90.",
  },
  {
    id: "a_02",
    resumeId: "r_02",
    resumeName: "Alex_Morgan_Frontend_Engineer.pdf",
    jobTitle: "Senior Frontend Engineer",
    company: "Vercel",
    createdAt: "2026-07-14T09:04:00Z",
    atsScore: 74,
    matchPercent: 71,
    skillsFound: ["React", "TypeScript", "Next.js", "Tailwind", "Testing"],
    missingKeywords: ["Edge runtime", "RSC", "Playwright", "Design systems"],
    strengths: ["Clear architecture ownership", "Modern stack alignment"],
    weaknesses: ["Missing RSC / edge experience", "Short on design-system detail"],
    suggestions: ["Add RSC project examples", "Quantify performance wins (LCP/CLS)", "List design-system contributions"],
    summary: "Solid frontend profile, close to target — add edge/RSC signals and quantified perf wins.",
  },
  {
    id: "a_03",
    resumeId: "r_03",
    resumeName: "Alex_Morgan_Design_Lead.pdf",
    jobTitle: "Design Lead",
    company: "Notion",
    createdAt: "2026-07-02T16:44:00Z",
    atsScore: 91,
    matchPercent: 88,
    skillsFound: ["Design Systems", "Figma", "Prototyping", "Research", "Leadership"],
    missingKeywords: ["Motion", "Design ops"],
    strengths: ["Portfolio impact clearly stated", "Leadership scope well defined"],
    weaknesses: ["No mention of motion / prototyping tooling"],
    suggestions: ["Add motion tooling", "Reference design-ops rituals you led"],
    summary: "Excellent design leadership profile. A few tool mentions away from a near-perfect match.",
  },
];

export const activity = [
  { id: "e1", label: "Analyzed resume for Senior PM at Linear", time: "2h ago", type: "analysis" as const },
  { id: "e2", label: "Uploaded Alex_Morgan_Senior_PM.pdf", time: "2h ago", type: "upload" as const },
  { id: "e3", label: "Downloaded ATS report — Frontend Engineer", time: "yesterday", type: "download" as const },
  { id: "e4", label: "Updated profile summary", time: "2 days ago", type: "profile" as const },
  { id: "e5", label: "Analyzed resume for Design Lead at Notion", time: "3 weeks ago", type: "analysis" as const },
];

export const testimonialsList = [
  {
    quote:
      "CareerForge rewrote how I prep for interviews. The ATS score jumped from 62 to 94 after one pass.",
    name: "Priya Shah",
    role: "Senior PM · Stripe",
  },
  {
    quote:
      "It reads like a staff engineer reviewed my resume. The missing-keywords list alone was worth it.",
    name: "Daniel Okafor",
    role: "Staff Engineer · Vercel",
  },
  {
    quote:
      "Beautiful product. Genuinely felt like an unfair advantage in a tight design market.",
    name: "Mika Tanaka",
    role: "Design Lead · Notion",
  },
];
