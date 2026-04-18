import { Prisma } from "../prisma/generated/client.js";

type ResultTypes = Prisma.GameGetPayload<{
  include: {
    gameQuestions: {
      include: {
        question: true;
      };
      orderBy: { order: "asc" };
    };
    guesses: true;
  };
}>;

export default function mapGameData(game: ResultTypes) {
  const results = game.gameQuestions.map((gq) => {
    const guess = game.guesses.find((g) => g.questionId === gq.questionId);

    return {
      question: gq.question.question,
      answer: gq.question.answer,
      distance: guess?.distance ?? null,
      points: guess?.points ?? 0,
      answerCoords: {
        latAnswer: gq.question.lat,
        lngAnswer: gq.question.lng,
      },
    };
  });

  const totalPoints = results.reduce((sum, g) => sum + g.points, 0);

  return {
    results,
    totalPoints,
  };
}
