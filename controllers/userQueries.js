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

export { getUser };
