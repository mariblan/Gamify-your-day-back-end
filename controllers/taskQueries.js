import mongoose from "mongoose";
import TaskCollection from "../models/task.js";

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await TaskCollection.find();
    res.status(200).json(allTasks);
  } catch (error) {
    next(error);
  }
};

export { getAllTasks };
