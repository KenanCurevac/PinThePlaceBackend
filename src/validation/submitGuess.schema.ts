import { z } from "zod";

export const submitGuessSchema = z.object({
  questionId: z.string().cuid(),
  guessLat: z.coerce.number(),
  guessLng: z.coerce.number(),
});
