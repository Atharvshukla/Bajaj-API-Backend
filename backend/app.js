import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import path from "path";
import processDataRoutes from "./Routers/check.js";


dotenv.config({ path: "./config/config.env" });
const app = express();

const port = process.env.PORT || 5000; // Default to 5000 if PORT is not set


// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://expensesage.vercel.app", // Allow all origins
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/v1", processDataRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

