const { Schema, model, Types } = require('mongoose')

const eventSchema = new Schema(
  {
    Name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
    },
    Venue : {
      type: String,
      required: [true, 'Venue is required.'],
      trim: true,
    },
    Date : {
      type: Number,
      required: [true, 'Date is required.'],
    },
    Duration : {
      type: String,
      required: [true, 'Duration is required.'],
    },
    OrganizedBy :{
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
