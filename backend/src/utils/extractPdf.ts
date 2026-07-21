import fs from "fs";
import pdfParse from "pdf-parse";

const extractPdf = async (filePath: string): Promise<string> => {
  try {
    const fileBuffer = fs.readFileSync(filePath);

    const pdfData = await pdfParse(fileBuffer);

    return pdfData.text.replace(/\s+/g, " ").trim();
  } catch (error) {
    console.error("PDF Extraction Error:", error);
    throw new Error("Failed to extract text from PDF.");
  }
};

export default extractPdf;