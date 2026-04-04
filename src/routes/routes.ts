import { Router } from "express";
import {
  submitGuess,
  selectedQuestions,
  createGame,
  getResults,
} from "../controllers/game.controller.js";

const router = Router();

router.get("/questions", selectedQuestions);
router.post("/guesses", submitGuess);
router.post("/games", createGame);
router.get("/games/:id/results", getResults);

export default router;
