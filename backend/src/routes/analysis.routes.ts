import { Router } from "express";

import { analyze } from "../controllers/analysis.controller";

const router = Router();

router.post("/analyze", analyze);

export default router;