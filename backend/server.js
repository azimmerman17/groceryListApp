require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOveride = require('method-override')
const app = express()
const db = require('./models/index')
const cors = require('cors')
const defineCurrentUser = require('./middleware/defineCurrentUser')



// middleware
app.set('view engine', 'jsx')
app.use(express.json())
app.use(defineCurrentUser)
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(methodOveride('_method'))

// controllers and routes
const userRoutes = require('./controllers/user')
const authRoutes = require('./controllers/authentication')
const foodRoutes = require('./controllers/food')

app.use('/user', userRoutes)
app.use('/auth', authRoutes)
app.use('/food', foodRoutes)


//db connection
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected', 'test'))
    .catch(err => console.error("test", err));

// Configue Port and listen
const PORT = process.env.PORT

app.listen(PORT, console.log(`Listening on Port ${PORT}`))

module.exports = app;