const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        name:{ type: String, require: true},
        comment:{ type: String, require: true},
        like:{ type: Number, require: true}
    }

)