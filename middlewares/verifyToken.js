import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req;
    if (!authorization) throw new Error("Please login");
    const { _id } = jwt.verify(authorization, process.env.JWT_SECRET);
    req.userId = _id;
    next();
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
