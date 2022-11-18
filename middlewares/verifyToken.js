import jwt from 'jsonwebtoken';
import ErrorResponse from '../utils/ErrorResponse.js';

const verifyToken = async (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req;

    if (!authorization) throw new ErrorResponse('Please login', 400);
    const { _id } = jwt.verify(authorization, process.env.JWT_SECRET);
    req.userId = _id;
    next();
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
