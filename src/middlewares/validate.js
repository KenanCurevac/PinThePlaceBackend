import { AppError } from "../errors/AppError.js";
export const validate = (schema, source) => (req, res, next) => {
    const data = req[source];
    const result = schema.safeParse(data);
    if (!result.success) {
        throw new AppError("Validation failed", 400);
    }
    req[source] = result.data;
    next();
};
//# sourceMappingURL=validate.js.map