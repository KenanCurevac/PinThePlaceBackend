import { prisma } from "../lib/prisma.js";
import type { Request, Response } from "express";
import { calculateGuess } from "../services/submitGuess.service.js";
import getGameResults from "../services/getResults.service.js";

export const createGame = async (req: Request, res: Response) => {
  const game = await prisma.game.create({
    data: {},
  });

  return res.status(201).json({ gameId: game.id });
};

export const selectedQuestions = async (req: Request, res: Response) => {
  const questionObject = await prisma.$queryRaw`
  SELECT id, question FROM "Question"
  ORDER BY RANDOM()
  LIMIT 10`;

  return res.status(200).json(questionObject);
};

export const submitGuess = async (req: Request, res: Response) => {
  const gameId = String(req.body.gameId);
  const questionId = String(req.body.questionId);
  const guessLat = Number(req.body.guessLat);
  const guessLng = Number(req.body.guessLng);

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

type GameParams = {
  id: string;
};

export const getResults = async (req: Request<GameParams>, res: Response) => {
  const { id } = req.params;

  const { results, totalPoints } = await getGameResults(id);

  return res.status(200).json({ results, totalPoints });
};
