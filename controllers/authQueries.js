import UserCollection from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const {
      body: { name, email, password },
    } = req;

    const found = await UserCollection.findOne({ email });
    if (found) throw new Error("User already exists");

    const hash = await bcrypt.hash(password, 5);
    const { _id } = await UserCollection.create({
      name,
      email,
      password: hash,
    });

    const token = jwt.sign({ _id }, process.env.JWT_SECRET);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await UserCollection.findOne({ email }).select("+password");
    if (!user) throw new Error("User doesn't exist");
    const pwdMatch = await bcrypt.compare(password, user.password);
    if (!pwdMatch) throw new Error("Password is not correct");
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

export { registerUser, loginUser };
