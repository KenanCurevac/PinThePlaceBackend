import type { ZodTypeAny } from "zod";
import type { Request, Response, NextFunction } from "express";
type Source = "body" | "params" | "query";
export declare const validate: (schema: ZodTypeAny, source: Source) => (req: Request, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=validate.d.ts.map