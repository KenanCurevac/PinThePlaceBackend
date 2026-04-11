import "dotenv/config";
import express from "express";
import router from "../src/routes/routes.js";
import { errorHandler } from "../src/middlewares/errorHandler.js";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Pin the Place Backend running locally",
    status: "ok",
  });
});

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use("/api", router);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
