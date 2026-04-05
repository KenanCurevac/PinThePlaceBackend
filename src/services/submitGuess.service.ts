import { prisma } from "../lib/prisma.js";
import { getDistance } from "../lib/calculateDistance.js";
import { getPoints } from "../lib/calculatePoints.js";
import { AppError } from "../errors/AppError.js";

type CalculateGuessProps = {
  gameId: string;
  questionId: string;
  guessLat: number;
  guessLng: number;
};

export default async function calculateGuess({
  gameId,
  questionId,
  guessLat,
  guessLng,
}: CalculateGuessProps) {
  const question = await prisma.question.findUnique({
    where: { id: questionId },
  });

  if (!question) {
    throw new AppError("Game not found", 404);
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
}
