import { prisma } from "../lib/prisma.js";
import mapGameData from "../lib/mapGameData.js";
import { AppError } from "../errors/AppError.js";

export default async function getGameResults(id: string) {
  const game = await prisma.game.findUnique({
    where: { id },
    include: {
      gameQuestions: {
        include: {
          question: true,
        },
        orderBy: { order: "asc" },
      },
      guesses: true,
    },
  });

  if (!game) {
    throw new AppError("Game not found", 404);
  }

  const formattedResults = mapGameData(game);

  return formattedResults;
}
