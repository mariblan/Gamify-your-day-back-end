import express from "express";
import { getUser } from "../controllers/userQueries.js";

const userRouter = express.Router();

userRouter.route("/:id").get(getUser);

export default userRouter;
