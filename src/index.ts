import "dotenv/config";
import express from "express";
import router from "./routes/routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use("/api", router);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
