const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('User', User)