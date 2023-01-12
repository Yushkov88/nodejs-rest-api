const Joi = require("joi");

const phoneRegexp = /^\(\d{3}\) \d{3}-\d{4}$/;

const addSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z\s'’ʼ-]{3,30}$/)
    .required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.bool(),
});

exports.module = {
  addSchema,
  updateFavoriteSchema,
  phoneRegexp,
};
