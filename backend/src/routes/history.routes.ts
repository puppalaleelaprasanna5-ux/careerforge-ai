import { Router } from "express";

import { history } from "../controllers/history.controller";

const router = Router();

router.get("/", history);

export default router;