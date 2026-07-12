import fs from "fs";
import pdfParse from "pdf-parse";

const extractPdfText = async (filePath: string): Promise<string> => {
  try {
    const buffer = fs.readFileSync(filePath);

    const data = await pdfParse(buffer);

    return data.text.trim();
  } catch (error) {
    throw new Error("Failed to extract PDF text");
  }
};

export default extractPdfText;