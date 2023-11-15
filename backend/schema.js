const Joi = require('joi')

module.exports.blogSchema = Joi.object({
      title: Joi.string().required(),
      author: Joi.string().required(),
      type: Joi.string().required(),
      body: Joi.string().required(),
    });
  