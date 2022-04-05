const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        image:{ type : String, required: true},
        description:{ type : String, required: true},
        location:{ type : Object, required: true },
        likes:{ type : Number, required: false },
        description:{ type : Object, required: false},
    }
)