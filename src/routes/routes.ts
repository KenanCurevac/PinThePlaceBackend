import { Router } from "express";
import { selectedQuestions } from "../controllers/controller.js";

const router = Router();

router.get("/question", selectedQuestions);

export default router;
