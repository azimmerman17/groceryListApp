const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: '.env'})
const Food = require('./models/food')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

const Food = JSON.parse(
    fs.readFileSync('../items.json')

)
// Import into DB
const importData = async () => {
    try {
      await Food.create(Food);
      console.log("Data Imported...");
      process.exit();
    } catch (err) {
      console.error(err);
    }
  };
  
  // Delete data
  const deleteData = async () => {
    try {
      await User.deleteMany();
      console.log("Data Destroyed...");
      process.exit();
    } catch (err) {
      console.error(err);
    }
  };
  
  if (process.argv[2] === "-i") {
    importData();
  } else if (process.argv[2] === "-d") {
    deleteData();
  }