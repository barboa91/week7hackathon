const { Schema } = require('mongoose')

const Location = new Schema({
  name: { type: String, require: true },
  city: { type: String, require: true },
  country: { type: String, require: true },
  pics: [{ type: String, require: true }]
})

module.exports = Location
