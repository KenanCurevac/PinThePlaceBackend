import { z } from "zod";

export const gameIdParamSchema = z.object({
  gameId: z.string().cuid(),
});
