import type { ZodTypeAny } from "zod";
import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";

type Source = "body" | "params" | "query";

export const validate =
  (schema: ZodTypeAny, source: Source) =>
  (req: Request, res: Response, next: NextFunction) => {
    const data = req[source];

    const result = schema.safeParse(data);

    if (!result.success) {
      throw new AppError("Validation failed", 400);
    }

    req[source] = result.data;
    next();
  };
