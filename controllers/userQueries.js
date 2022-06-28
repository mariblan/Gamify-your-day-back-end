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

const addToToday = async (req, res, next) => {
  // Get the taskId and check the array for its presence. If there,
  // delete from array, if not add to array. How to handle if array doesn't exist?
  try {
    const changeFavoriteArr = await UserCollection.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $push: { todayList: req.params.taskId } },
      { new: true }
    ).populate("todayList");
    res.status(200).json(changeFavoriteArr);
  } catch (error) {
    next(error);
  }
};

const removeFromToday = async (req, res, next) => {
  // Get the taskId and check the array for its presence. If there,
  // delete from array, if not add to array. How to handle if array doesn't exist?
  try {
    const changeFavoriteArr = await UserCollection.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $pull: { todayList: req.params.taskId } },
      { new: true }
    ).populate("todayList");
    res.status(200).json(changeFavoriteArr);
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
      { returnDocument: "after" }
    ).populate("favoriteList");
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
      { returnDocument: "after" }
    ).populate("favoriteList");
    res.status(200).json(changeFavoriteArr);
  } catch (error) {
    next(error);
  }
};

const setCurrentProgress = async (req, res, next) => {
  // Get the taskId and check the array for its presence. If there,
  // delete from array, if not add to array. How to handle if array doesn't exist?
  try {
    const changeUserProgress = await UserCollection.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { progress: req.params.progress },
      { returnDocument: "after" }
    );
    res.status(200).json(changeUserProgress);
  } catch (error) {
    next(error);
  }
};

const addFailed = async (req, res, next) => {
  // Get the taskId and check the array for its presence. If there,
  // delete from array, if not add to array. How to handle if array doesn't exist?
  try {
    const changeFailedArr = await UserCollection.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: {
          todayFailed: req.params.taskId,
          todayCompleted: req.params.taskId,
        },
      },
      { returnDocument: "after" }
    );
    res.status(200).json(changeFailedArr);
  } catch (error) {
    next(error);
  }
};

const addSuccess = async (req, res, next) => {
  // Get the taskId and check the array for its presence. If there,
  // delete from array, if not add to array. How to handle if array doesn't exist?
  try {
    const changeSuccessArr = await UserCollection.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: {
          todaySuccess: req.params.taskId,
          todayCompleted: req.params.taskId,
        },
      },
      { returnDocument: "after" }
    );
    res.status(200).json(changeSuccessArr);
  } catch (error) {
    next(error);
  }
};

export {
  getUser,
  addToToday,
  removeFromToday,
  addFavorite,
  removeFavorite,
  setCurrentProgress,
  addFailed,
  addSuccess,
};
