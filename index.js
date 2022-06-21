import "dotenv/config";
import dbConnection from "./dbConnection.js";
dbConnection();
import cors from "cors";
import express from "express";

import TaskCollection from "./models/task.js";

const app = express();
// const router = express.Router();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const allTasks = await TaskCollection.find();
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(404).send("No tasks found");
    next(error);
  }
});

// Error handler, make this better later.
app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});

app.listen(port);
