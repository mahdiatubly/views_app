const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')
const schema = mongoose.Schema 

// create a schema
const userSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    region: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: [true, 'Please enter an email.'],
        //You can't add error message with unique, you have to use the `err.code`
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please, enter a valid email.']
    },
    phone: {
        type: String,
        required: false,
        //You can't add error message with unique, you have to use the `err.code`
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password.'],
        minlength: [8, 'The password should be at least 8 digits.']
    },
    content: [{
        type: schema.Types.ObjectId,
        ref: 'Content'
    }],
    comments: [{
        type: schema.Types.ObjectId,
        ref: 'Comment'
    }]


})

  
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


const User = mongoose.model('user', userSchema) 
  
module.exports = User