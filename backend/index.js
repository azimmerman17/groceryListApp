require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const db = require('./models/index')
const cors = require('cors')

// middleware
app.set('view engine', 'jsx')
app.use(express.json())
app.use(cors())


// controllers and routes
const userRoutes = require('./controllers/user')
const authRoutes = require('./controllers/authentication')

app.use('/user', userRoutes)
app.use('/auth', authRoutes)

//db connection
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// Configue Port and listen
const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Listening on Port ${PORT}`))

module.exports = app;