const { Schema, model, Types } = require('mongoose')

const categorySchema = new Schema(
  {
    Name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
    },
    Year : {
      type: Number,
      required: [true, 'Year is required.'],
      trim: true,
    },
    Condition : {
      type: String,
      required: [true, 'Condition is required.'],
    },
    
  },
  {
    timestamps: true,
  }
)

const Category = model('Category', categorySchema)

module.exports = Category;