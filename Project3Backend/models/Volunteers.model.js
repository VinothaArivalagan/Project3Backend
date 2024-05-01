const { Schema, model, Types } = require('mongoose')

const volunteerSchema = new Schema(
  {
    Name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
    },
    Age : {
      type: Number,
      required: [true, 'Age is required.'],
      trim: true,
    },
    Phone : {
      type: Number,
      required: [true, 'Phone is required.'],
    },
    Email : {
      type: String,
      required: [true, 'mail is required.'],
    },
    DateAvailability :{
      type: String,
    }
  },
  {
    timestamps: true,
  }
)

const Volunteer = model('Volunteer', volunteerSchema)

module.exports = Volunteer;