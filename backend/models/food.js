const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength:20,
    required: true
  },
  aisle: {
    type: Number,
  },
  type: {
    type:String,
    required: true,
    enum: [
      'Bakery',
      'Bread',
      'Meat',
      'Seafood',
      'Pasta',
      'Sauces',
      'Salad Dressings and Condiments',
      'Breakfast',
      'Soups',
      'Canned Goods',
      'Frozen Foods',
      'Dairy',
      'Drinks'

    ]
  },
  description: {
    type: String
  }
})

module.exports = mongoose.model('Food', foodSchema)