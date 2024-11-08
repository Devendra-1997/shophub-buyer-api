import "dotenv/config";
import express from "express";
import cors from "cors";
import { mongoConnect } from "./config/dbConfig.js";

const app = express();
const PORT = process.env.PORT || 9000;

// Middlewares
app.use(cors());
app.use(express.json());

// connect to mongoDB
mongoConnect();

// Run the server
app.listen(PORT, (error) => {
  error
    ? console.log("Error", error)
    : console.log("Server is running at port", PORT);
});
