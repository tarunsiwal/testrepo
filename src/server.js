import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./connectMongoDB.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  console.log("app is running!");
  res.send("express server is running");
});

const startServer = () => {
  app.listen(port, () => console.log(`port is runnig on ${port}`));
};

connectDB().then(() => {
  startServer();
});
