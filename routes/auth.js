import express from "express";
// import { getAllTasks } from "../controllers/taskQueries.js";

const authRouter = express.Router();

authRouter.route("/").get();

export default authRouter;
