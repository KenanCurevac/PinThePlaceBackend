import { prisma } from "../lib/prisma.js";
import { AppError } from "../errors/AppError.js";

export const nextGameQuestion = async (gameId: string) => {
  const game = await prisma.game.findUnique({
    where: { id: gameId },
    include: {
      gameQuestions: {
        orderBy: { order: "asc" },
      },
    },
  });

  if (!game) {
    throw new AppError("Game not found", 404);
  }

  const nextIndex = game.currentQuestionIndex + 1;
  const nextGameQuestion = game.gameQuestions[nextIndex];

  if (!nextGameQuestion) {
    return {
      finished: true,
    };
  }

  await prisma.$transaction([
    prisma.game.update({
      where: { id: gameId },
      data: {
        currentQuestionIndex: nextIndex,
      },
    }),

    prisma.gameQuestion.update({
      where: {
        gameId_questionId: {
          gameId,
          questionId: nextGameQuestion.questionId,
        },
      },
      data: {
        startedAt: new Date(),
      },
    }),
  ]);

  return {
    success: true,
    currentQuestionIndex: nextIndex,
  };
};
