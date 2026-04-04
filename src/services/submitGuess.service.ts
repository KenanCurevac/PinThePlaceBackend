import { prisma } from "../lib/prisma.js";
import { getDistance } from "../lib/calculateDistance.js";
import { getPoints } from "../lib/calculatePoints.js";

type CalculateGuessProps = {
  gameId: string;
  questionId: string;
  guessLat: number;
  guessLng: number;
};

export const calculateGuess = async ({
  gameId,
  questionId,
  guessLat,
  guessLng,
}: CalculateGuessProps) => {
  const question = await prisma.question.findUnique({
    where: { id: questionId },
  });

  if (!question) {
    throw new Error("Question not found");
  }

  const distance = getDistance(question.lat, question.lng, guessLat, guessLng);
  const points = getPoints(distance);

  await prisma.guess.create({
    data: {
      gameId,
      questionId,
      lat: guessLat,
      lng: guessLng,
      distance,
      points,
    },
  });

  return {
    correctAnswer: question.answer,
    distance,
    points,
  };
};
