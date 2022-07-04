import bcrypt from "bcrypt";
import UserCollection from "../models/user.js";
import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/ErrorResponse.js";

const registerUser = async (req, res, next) => {
  try {
    const {
      body: { name, email, password },
    } = req;

    const found = await UserCollection.findOne({ email });
    if (found) res.status(422).send({ error: "User already exists" });

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
    if (!user)
      throw new ErrorResponse("User doesn't exist", 404, "ERR_NOT_USR");
    const pwdMatch = await bcrypt.compare(password, user.password);
    if (!pwdMatch) res.send({ error: "Password is not correct" });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

export { registerUser, loginUser };
