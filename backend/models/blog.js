const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema ({
    title: string,
    author: string,
    body: string
})

module.exports = mongoose.model("Blog",blogSchema)