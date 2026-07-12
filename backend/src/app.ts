import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import errorHandler from "./middleware/error.middleware";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CareerForge AI Backend Running 🚀",
  });
});

export default app;