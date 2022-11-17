const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const schema = mongoose.Schema 

// create a schema
const contentSchema = new mongoose.Schema({

    content_type: {
        type: String,
        required: false
    },
    realm: {
        type: String,
        required: [true]
    },
    content: {
        type: String,
        required: false
    },
    creator_id: {
        type: String,
        default: 'Anonymous',
    },
    public: {
        type:String,
    },
    
})

const Content = mongoose.model('content', contentSchema) 
  
module.exports = Content