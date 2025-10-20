const Joi = require('joi');

const createCategorySchema = Joi.object({
  name: Joi.string().trim().min(1).max(255).required(),
});

const updateCategorySchema = Joi.object({
  name: Joi.string().trim().min(1).max(255).optional(),
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
};
