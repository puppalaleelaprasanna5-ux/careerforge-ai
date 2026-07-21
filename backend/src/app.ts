import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import resumeRoutes from "./routes/resume.routes";

import errorHandler from "./middleware/error.middleware";
import analysisRoutes from "./routes/analysis.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "CareerForge AI Backend Running 🚀",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/analysis", analysisRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;