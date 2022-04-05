const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        image:{ type : String, required: true},
        description:{ type : String, required: true},
        location:{ type : Schema.Types.ObjectId, ref: 'locations' },
        likes:{ type : Number, required: false },
        comments:[{ type : Schema.Types.ObjectId, ref:'comms'}],
    }
)
module.exports = Post
