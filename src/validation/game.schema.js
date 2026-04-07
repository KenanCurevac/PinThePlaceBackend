import { z } from "zod";
export const gameParamsSchema = z.object({
    id: z.string().cuid(),
});
//# sourceMappingURL=game.schema.js.map