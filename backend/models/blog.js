const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema ({
    title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  body: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Blog",blogSchema)