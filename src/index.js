import "dotenv/config";
import express from "express";
import router from "../src/routes/routes.js";
import { errorHandler } from "../src/middlewares/errorHandler.js";
import cors from "cors";
const app = express();
app.use(cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running locally on http://localhost:${PORT}`);
    });
}
export default app;
//# sourceMappingURL=index.js.map