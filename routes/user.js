import express from "express";
import {
  getUser,
  addToToday,
  removeFromToday,
  addFavorite,
  removeFavorite,
} from "../controllers/userQueries.js";

const userRouter = express.Router();

userRouter.route("/:id").get(getUser);
userRouter
  .route("/:id/favorites/:taskId")
  .put(addFavorite)
  .delete(removeFavorite);
userRouter
  .route("/:id/todayList/:taskId")
  .put(addToToday)
  .delete(removeFromToday);

export default userRouter;
