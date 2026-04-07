import { Prisma } from "../prisma/generated/client.js";
type ResultTypes = Prisma.GameGetPayload<{
    include: {
        guesses: {
            include: {
                question: true;
            };
        };
    };
}>;
export default function mapGameData(game: ResultTypes): {
    results: {
        question: string;
        answer: string;
        distance: number;
        points: number;
        answerCoords: {
            latAnswer: number;
            lngAnswer: number;
        };
    }[];
    totalPoints: number;
};
export {};
//# sourceMappingURL=mapData.d.ts.map