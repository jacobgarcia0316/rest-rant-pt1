const mongoose = require('mongoose')
const { stringify } = require('querystring')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  pic: String,
  cuisines: {type: String, required: true},
  city: {type: String, default: 'somewhere'},
  state: {type: String, default: 'somewhere else'},
  founded: Number,
})

module.exports = mongoose.model ('Place', placeSchema)