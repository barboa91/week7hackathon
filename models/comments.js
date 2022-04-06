const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    name: { type: String, require: true },
    comment: { type: String, require: true },
    like: { type: Number, require: true }
  },
  { timestamps: true }
)

module.exports = Comment
