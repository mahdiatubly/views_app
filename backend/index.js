//Importing the required packages
const express = require('express')
const app = express()
const User = require('./models/User')
const mongoose = require('mongoose')  
require('dotenv').config()
//app.use(express.static('static'))
app.use(express.json())

//Importing the routers
app.use('/', require('./routers/user'))

//Connecting to the DB
const dbUrl = `mongodb+srv://mahdiatubly:${process.env.dbUrl}@viewsapp.pi4hcan.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(dbUrl)
.then((r)=>{
    console.log("The DB Connection succeed!")
    app.listen(4000, () => {
        console.log('App listening on port 4000!')
    })
})




