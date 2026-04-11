import { Router } from "express";
import {
  submitGuess,
  createGame,
  getResults,
  getGameQuestions,
} from "../controllers/game.controller.js";
import { validate } from "../middlewares/validate.js";
import { submitGuessSchema } from "../validation/submitGuess.schema.js";
import { gameIdParamSchema } from "../validation/gameId.schema.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";

const router = Router();

router.post("/game", asyncHandler(createGame));
router.get(
  "/game/:gameId/questions",
  validate(gameIdParamSchema, "params"),
  getGameQuestions,
);
router.post(
  "/game/:gameId/guesses",
  validate(gameIdParamSchema, "params"),
  validate(submitGuessSchema, "body"),
  asyncHandler(submitGuess),
);
router.get(
  "/game/:gameId/results",
  validate(gameIdParamSchema, "params"),
  asyncHandler(getResults),
);

export default router;
