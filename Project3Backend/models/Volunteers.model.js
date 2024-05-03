const { Schema, model, Types } = require('mongoose')

const volunteerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
    },
    age : {
      type: Number,
      required: [true, 'Age is required.'],
      trim: true,
    },
    phone : {
      type: Number,
      required: [true, 'Phone is required.'],
    },
    email : {
      type: String,
      required: [true, 'mail is required.'],
    },  
  },
  {
    timestamps: true,
  }
)

const Volunteer = model('Volunteer', volunteerSchema)

module.exports = Volunteer;