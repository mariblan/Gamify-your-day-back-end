import express from "express";
import {
  getUser,
  addToToday,
  removeFromToday,
  addFavorite,
  removeFavorite,
  setCurrentProgress,
  clearToday,
  getCompleted,
  clearCompleted,
  addFailed,
  clearFailed,
  addSuccess,
  clearSuccess,
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
userRouter.route("/:id/completed").get(getCompleted).delete(clearCompleted);
userRouter.route("/:id/todayList").delete(clearToday);
userRouter.route("/:id/failed/:taskId").put(addFailed);
userRouter.route("/:id/failed").delete(clearFailed);
userRouter.route("/:id/success/:taskId").put(addSuccess);
userRouter.route("/:id/success").delete(clearSuccess);
userRouter.route("/:id/:progress").put(setCurrentProgress);

export default userRouter;
