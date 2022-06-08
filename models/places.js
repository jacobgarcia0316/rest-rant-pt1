const mongoose = require('mongoose')
const { stringify } = require('querystring')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  pic: {type: String, default: 'http://placekitten.com/350/350'},
  cuisines: {type: String, required: true},
  city: {type: String, default: 'somewhere'},
  state: {type: String, default: 'somewhere else'},
  founded: {
    type: Number,
    min: [1673, 'Dang no way!'],
    max: [new Date().getFullYear(), 'what is this?? back to the future?!']
  }
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}


module.exports = mongoose.model ('Place', placeSchema)