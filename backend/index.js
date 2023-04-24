require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const db = require('./models/index')
const cors = require('cors')
const food = require('./controllers/food')

// middleware
app.set('view engine', 'jsx')
app.use(express.json())
app.use('/food', food)
app.use(cors())


// controllers and routes
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from '/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <React.StrictMode>
//     <BrowserRouter>
//        <App />
//     </BrowserRouter>
//  </React.StrictMode>
// );


//d db connection
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// Configue Port and listen
const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Listening on Port ${PORT}`))

module.exports = app;