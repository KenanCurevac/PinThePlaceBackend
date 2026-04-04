import { prisma } from "../lib/prisma.js";
import mapGameData from "../lib/mapData.js";

export default async function getGameResults(id: string) {
  const game = await prisma.game.findUnique({
    where: { id },
    include: {
      guesses: {
        include: {
          question: true,
        },
      },
    },
  });

  if (!game) {
    throw new Error("Game not found");
  }

  const formattedResults = mapGameData(game);

  return formattedResults;
}
