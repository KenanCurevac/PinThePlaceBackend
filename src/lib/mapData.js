import { Prisma } from "../prisma/generated/client.js";
export default function mapGameData(game) {
    const results = game.guesses.map((g) => ({
        question: g.question.question,
        answer: g.question.answer,
        distance: g.distance,
        points: g.points,
        answerCoords: {
            latAnswer: g.question.lat,
            lngAnswer: g.question.lng,
        },
    }));
    const totalPoints = results.reduce((sum, g) => sum + g.points, 0);
    return {
        results,
        totalPoints,
    };
}
//# sourceMappingURL=mapData.js.map