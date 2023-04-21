const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  first_name: { 
    type: String,
    maxLength: 20,
    requred: true,
  },
  last_name: {
    type: String,
    maxLength: 20,
    required: true,
  },
  email: {
    type: String,
    maxLength: 100,
    required: true,
  },
  grocery_list: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Food'
  }],
  // for future use when adding authentication
  // password_digest:
  // role:
})

module.exports = mongoose.model('User', userSchema)