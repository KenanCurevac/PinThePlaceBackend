import { Router } from "express";
import { submitGuess, createGame, getResults, } from "../controllers/game.controller.js";
import { validate } from "../middlewares/validate.js";
import { guessBodySchema } from "../validation/guess.schema.js";
import { gameParamsSchema } from "../validation/game.schema.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
const router = Router();
router.post("/games", asyncHandler(createGame));
router.post("/guesses", validate(guessBodySchema, "body"), asyncHandler(submitGuess));
router.get("/games/:id/results", validate(gameParamsSchema, "params"), asyncHandler(getResults));
export default router;
//# sourceMappingURL=routes.js.map