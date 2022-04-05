const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Location = new Schema(
    {
      name:{ type: String, require: true},
      city:{ type: String, require: true},
      country:{ type: String, require: true},
      pics:{ type: String, require: true}
    }
)

module.exports = Location