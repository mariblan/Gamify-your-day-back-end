import TaskCollection from '../models/task.js';

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await TaskCollection.find();
    res.json(allTasks);
  } catch (error) {
    next(error);
  }
};

export { getAllTasks };
