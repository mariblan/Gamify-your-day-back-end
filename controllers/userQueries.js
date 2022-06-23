import mongoose from "mongoose";
import UserCollection from "../models/user.js";

const getUser = async (req, res, next) => {
  try {
    const getUser = await UserCollection.findOne({
      _id: req.params.id,
    })
      .populate("todayList")
      .populate("todayCompleted")
      .populate("todaySuccess")
      .populate("todayFailed")
      .populate("favoriteList");
    res.status(200).json(getUser);
  } catch (error) {
    next(error);
  }
};

const addFavorite = async (req, res, next) => {
  // Get the taskId and check the array for its presence. If there,
  // delete from array, if not add to array. How to handle if array doesn't exist?
  try {
    const changeFavoriteArr = await UserCollection.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $push: { favoriteList: req.params.taskId } },
      { new: true }
    )
      .populate("todayList")
      .populate("todayCompleted")
      .populate("todaySuccess")
      .populate("todayFailed")
      .populate("favoriteList");
    res.status(200).json(changeFavoriteArr);
  } catch (error) {
    next(error);
  }
};

const removeFavorite = async (req, res, next) => {
  // Get the taskId and check the array for its presence. If there,
  // delete from array, if not add to array. How to handle if array doesn't exist?
  try {
    const changeFavoriteArr = await UserCollection.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $pull: { favoriteList: req.params.taskId } },
      { new: true }
    )
      .populate("todayList")
      .populate("todayCompleted")
      .populate("todaySuccess")
      .populate("todayFailed")
      .populate("favoriteList");
    res.status(200).json(changeFavoriteArr);
  } catch (error) {
    next(error);
  }
};

export { getUser, addFavorite, removeFavorite };
