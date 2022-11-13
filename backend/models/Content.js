const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const schema = mongoose.Schema 

// create a schema
const contentSchema = new mongoose.Schema({

    content_type: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    creator_id: {
        type: String,
        required: [false]
    },
})


const Content = mongoose.model('content', contentSchema) 
  
module.exports = Content