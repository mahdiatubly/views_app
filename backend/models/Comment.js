const mongoose = require('mongoose')
const bcrypt = require('bcrypt') 

// create a schema
const commentSchema = new mongoose.Schema({

    comment_type: {
        type: String,
        required: false
    },
    comment: {
        type: String,
        required: false
    },
    owner_id: {
        type: String,
        required: false
    },
})


const Comment = mongoose.model('comment', commentSchema) 
  
module.exports = Comment