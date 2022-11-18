import Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().required(),
  password: Joi.string().min(2).max(30).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(2).max(30).required(),
});
