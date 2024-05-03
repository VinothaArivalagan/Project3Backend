const { Schema, model, Types } = require('mongoose')

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
    },
    venue : {
      type: String,
      required: [true, 'Venue is required.'],
      trim: true,
    },
    date : {
      type: Date,
      required: [true, 'Date is required.'],
    },
    time : {
      type: String,
      required: [true, 'Time is required.'],
    },
    organizedBy :{
      type: String,
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Event = model('Event', eventSchema)

module.exports = Event;
