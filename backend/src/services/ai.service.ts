import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export interface ATSAnalysis {
  atsScore: number;
  matchPercentage: number;

  skillsFound: string[];
  missingKeywords: string[];

  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
}

export const generateATSAnalysis = async (
  resumeText: string,
  jobDescription: string
): Promise<ATSAnalysis> => {

  const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the resume against the job description.

Return ONLY valid JSON.

{
  "atsScore": 0,
  "matchPercentage": 0,
  "skillsFound": [],
  "missingKeywords": [],
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Rules:

- Do not return markdown.
- Do not return explanation.
- Only valid JSON.
- ATS score between 0-100.
- Match percentage between 0-100.
- strengths: 3-5 items.
- weaknesses: 3-5 items.
- suggestions: 3-5 items.

Resume:

${resumeText}

Job Description:

${jobDescription}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",

    temperature: 0.3,

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const content = completion.choices[0]?.message?.content ?? "";

  const cleaned = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (error) {
    console.error("Groq Response:");
    console.error(cleaned);

    throw new Error("Failed to parse AI response.");
  }
};