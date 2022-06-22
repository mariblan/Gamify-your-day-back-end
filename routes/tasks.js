import express from "express";
import { getAllTasks } from "../controllers/taskQueries.js";

const taskRouter = express.Router();

taskRouter.route("/").get(getAllTasks);

export default taskRouter;
