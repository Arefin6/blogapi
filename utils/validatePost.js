const joi = require("joi");

const postSchema = joi.object({
  title: joi.string().min(3).required(),
  content: joi.string().min(10).required(),
  author: joi.string().required(),
});

module.exports = postSchema;
