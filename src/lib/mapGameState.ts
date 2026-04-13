import { GameWithRelations } from "../services/getState.service.js";

export default function mapGameState(game: GameWithRelations) {
  return game.gameQuestions.map((gq) => {
    const guess = game.guesses.find((g) => g.questionId === gq.questionId);

    const question = {
      questionId: gq.questionId,
      question: gq.question.question,
    };

    if (!guess) {
      return {
        ...question,
        correct: null,
        guess: null,
      };
    }

    return {
      ...question,
      correct: {
        lat: gq.question.lat,
        lng: gq.question.lng,
      },
      guess: {
        lat: guess.lat,
        lng: guess.lng,
        distance: guess.distance,
        points: guess.points,
      },
    };
  });
}
