import { GameWithRelations } from "../services/getState.service.js";

export function buildCurrentQuestion(
  game: GameWithRelations,
  currentGameQuestion: GameWithRelations["gameQuestions"][number],
) {
  const guess = game.guesses.find(
    (g) => g.questionId === currentGameQuestion.questionId,
  );

  return {
    questionId: currentGameQuestion.questionId,
    question: currentGameQuestion.question.question,
    startedAt: currentGameQuestion.startedAt,

    guess: guess
      ? {
          lat: guess.lat,
          lng: guess.lng,
          distance: guess.distance,
          points: guess.points,
        }
      : null,

    correct: guess
      ? {
          answer: currentGameQuestion.question.answer,
          lat: currentGameQuestion.question.lat,
          lng: currentGameQuestion.question.lng,
        }
      : null,
  };
}
