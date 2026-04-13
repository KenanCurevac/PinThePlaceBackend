import { GameWithRelations } from "../services/getState.service.js";

export default function mapGameState(game: GameWithRelations) {
  return game.gameQuestions.map((gq) => {
    const guess = game.guesses.find((g) => g.questionId === gq.questionId);

    const totalPoints = game.guesses.reduce((sum, g) => sum + g.points, 0);

    const answer = {
      questionId: gq.questionId,
      question: gq.question.question,
      correct: {
        lat: gq.question.lat,
        lng: gq.question.lng,
      },
    };

    if (!guess) {
      return {
        ...answer,
        guess: null,
      };
    }

    return {
      ...answer,
      guess: {
        lat: guess.lat,
        lng: guess.lng,
        distance: guess.distance,
        points: guess.points,
        totalPoints,
      },
    };
  });
}
