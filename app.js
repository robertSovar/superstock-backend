import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongo from "./config/connectToMongo.js";
import equipmentRouter from "./routes/api/equipmentRoutes.js";

dotenv.config();

connectToMongo();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/equipment", equipmentRouter);

export default app;
