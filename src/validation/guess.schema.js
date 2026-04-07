import { z } from "zod";
export const guessBodySchema = z.object({
    gameId: z.string(),
    questionId: z.string(),
    guessLat: z.coerce.number(),
    guessLng: z.coerce.number(),
});
//# sourceMappingURL=guess.schema.js.map