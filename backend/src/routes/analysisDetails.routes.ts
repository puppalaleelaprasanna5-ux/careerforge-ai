import { Router } from "express";

import { getAnalysis } from "../controllers/analysisDetails.controller";

const router = Router();

router.get("/:id", getAnalysis);

export default router;