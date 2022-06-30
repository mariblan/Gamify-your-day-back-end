import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().alphanum().min(6).max(20).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().alphanum().min(6).max(20).required(),
});
