const { Schema, model, Types } = require('mongoose')

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
    },
    year : {
      type: Number,
      required: [true, 'Year is required.'],
      trim: true,
    },
    condition : {
      type: String,
      required: [true, 'Condition is required.'],
    },
    image: {
      type: String, 
      required: [true, 'Image is required.'],
    },
    location: {
      type: String, 
      required: [true, 'Location is required.'],
    }
  },
  {
    timestamps: true,
  }
)

const Category = model('Category', categorySchema)

module.exports = Category;