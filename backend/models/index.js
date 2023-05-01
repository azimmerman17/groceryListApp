require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() => console.log('DB connected'))
.catch(err => console.error(err));

module.exports.User = require('./user')
module.exports.Food = require('./food')
