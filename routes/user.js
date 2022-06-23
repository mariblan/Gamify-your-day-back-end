import express from "express";
import {
  getUser,
  addFavorite,
  removeFavorite,
} from "../controllers/userQueries.js";

const userRouter = express.Router();

userRouter.route("/:id").get(getUser);
userRouter.route("/:id/:taskId").put(addFavorite).delete(removeFavorite);

export default userRouter;
