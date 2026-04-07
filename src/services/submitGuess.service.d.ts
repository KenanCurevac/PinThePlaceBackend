type CalculateGuessProps = {
    gameId: string;
    questionId: string;
    guessLat: number;
    guessLng: number;
};
export default function calculateGuess({ gameId, questionId, guessLat, guessLng, }: CalculateGuessProps): Promise<{
    correctAnswer: string;
    distance: number;
    points: number;
}>;
export {};
//# sourceMappingURL=submitGuess.service.d.ts.map