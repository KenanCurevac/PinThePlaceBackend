import { prisma } from "../lib/prisma.js";
import { AppError } from "../errors/AppError.js";
import mapGameState from "../lib/mapGameState.js";
import { Prisma } from "../prisma/generated/client.js";

export type GameWithRelations = Prisma.GameGetPayload<{
  include: {
    guesses: true;
    gameQuestions: {
      include: { question: true };
    };
  };
}>;

export default async function getGameState(id: string) {
  const game = await prisma.game.findUnique({
    where: { id },
    include: {
      guesses: true,
      gameQuestions: {
        include: { question: true },
        orderBy: { order: "asc" },
      },
    },
  });

  if (!game) {
    throw new AppError("Game not found", 404);
  }

  const questions = mapGameState(game as GameWithRelations);

  const totalPoints = game.guesses.reduce((sum, g) => sum + g.points, 0);

  return {
    gameId: game.id,
    questions,
    totalPoints,
  };
}
