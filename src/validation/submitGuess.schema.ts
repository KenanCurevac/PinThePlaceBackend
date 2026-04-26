import { z } from "zod";

export const submitGuessSchema = z.object({
  questionId: z.string().cuid(),
  guessLat: z.number().nullable(),
  guessLng: z.number().nullable(),
});
