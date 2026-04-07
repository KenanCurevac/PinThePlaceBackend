import { z } from "zod";
export declare const guessBodySchema: z.ZodObject<{
    gameId: z.ZodString;
    questionId: z.ZodString;
    guessLat: z.ZodCoercedNumber<unknown>;
    guessLng: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
//# sourceMappingURL=guess.schema.d.ts.map