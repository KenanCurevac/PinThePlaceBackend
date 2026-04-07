export default function getGameResults(id: string): Promise<{
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
}>;
//# sourceMappingURL=getResults.service.d.ts.map