const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
    },
    username: {
      type: String,
      required: [true, 'Username is required.'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
    },
  },
  {
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User;
