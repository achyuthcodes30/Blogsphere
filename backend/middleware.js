const express = require('express')
const {blogSchema} = require('./schema.js')
const expressError = require('./utils/expressError');


module.exports.validateBlog = (req, res, next) => {
    const { error } = blogSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new expressError(msg, 400)
    } else {
        next();
    }
}