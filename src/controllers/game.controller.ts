import { prisma } from "../lib/prisma.js";
import type { Request, Response } from "express";
import calculateGuess from "../services/submitGuess.service.js";
import getGameResults from "../services/getResults.service.js";

export const createGame = async (req: Request, res: Response) => {
  const game = await prisma.game.create({
    data: {},
  });

  const questions = await prisma.$queryRaw<{ id: string }[]>`
    SELECT id FROM "Question"
    ORDER BY RANDOM()
    LIMIT 10
  `;

  await prisma.gameQuestion.createMany({
    data: questions.map((q, index) => ({
      gameId: game.id,
      questionId: q.id,
      order: index,
    })),
  });

  return res.status(201).json({ gameId: game.id });
};

export const getGameQuestions = async (req: Request, res: Response) => {
  const gameId = req.params.id as string;

  const gameQuestions = await prisma.gameQuestion.findMany({
    where: { gameId },
    include: {
      question: true,
    },
    orderBy: {
      order: "asc",
    },
  });

  return res.json({
    questions: gameQuestions.map((gq) => ({
      id: gq.question.id,
      question: gq.question.question,
    })),
  });
};

export const submitGuess = async (req: Request, res: Response) => {
  const gameId = req.params.gameId as string;

  const { questionId, guessLat, guessLng } = req.body;
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

export const getResults = async (req: Request, res: Response) => {
  const gameId = req.params.gameId as string;

  const { results, totalPoints } = await getGameResults(gameId);

  return res.status(200).json({ results, totalPoints });
};
