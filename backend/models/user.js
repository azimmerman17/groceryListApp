const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  first_name: { 
    type: String,
    requred: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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