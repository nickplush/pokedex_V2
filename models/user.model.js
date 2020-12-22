const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  googleId: String,
  favorites: Array
})

module.exports = model('User', userSchema)
