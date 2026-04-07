import { prisma } from "../lib/prisma.js";
import calculateGuess from "../services/submitGuess.service.js";
import getGameResults from "../services/getResults.service.js";
export const createGame = async (req, res) => {
    const game = await prisma.game.create({
        data: {},
    });
    const questions = await prisma.$queryRaw `
  SELECT id, question FROM "Question"
  ORDER BY RANDOM()
  LIMIT 10`;
    return res.status(201).json({ gameId: game.id, questions });
};
export const submitGuess = async (req, res) => {
    const { gameId, questionId, guessLat, guessLng } = req.body;
    const { correctAnswer, distance, points } = await calculateGuess({
        gameId,
        questionId,
        guessLat,
        guessLng,
    });
    return res.status(201).json({
        correctAnswer,
        distance,
        points,
    });
};
export const getResults = async (req, res) => {
    const { id } = req.params;
    const { results, totalPoints } = await getGameResults(id);
    return res.status(200).json({ results, totalPoints });
};
//# sourceMappingURL=game.controller.js.map