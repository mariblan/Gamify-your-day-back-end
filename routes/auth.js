import express from "express";
import { registerUser, loginUser } from "../controllers/authQueries.js";
import { getUser } from "../controllers/userQueries.js";
import { userSchema, loginSchema } from "../Joi/schemas.js";
import validateJOI from "../middlewares/validateJOI.js";
import verifyToken from "../middlewares/verifyToken.js";

const authRouter = express.Router();

authRouter.route("/login").post(validateJOI(loginSchema), loginUser);
authRouter.route("/register").post(validateJOI(userSchema), registerUser);
authRouter.route("/me").post(verifyToken, getUser);

export default authRouter;
