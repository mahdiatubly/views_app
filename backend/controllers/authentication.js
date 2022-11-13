//Importing the required packages
const User = require('../models/User')

/*This function is intended to handle errors caused by uncompatible data provided by user,
  it will show the precise reason behined the caused problem
        @Parameters: 
            -err: this para. intended to recive the error obj thorws by the DB
        @Return:
            -This function returns an obj. that contains the defects in each
             field.
*/ 
function handleError(err){
    console.log(err.message, err.code)
    let errors = {email:'', phone:'', password:''}

    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach((error)=>{
            errors[error.properties.path] = error.properties.message
        })
    }

    //Duplicate field error `err.code`
    if(err.code === 11000 && err.keyPattern.email === 1){
        errors.email = 'This email is already used'
    }
    else if(err.code === 11000 && err.keyPattern.phone === 1){
        errors.phone = 'This phone number is already used'
    }
    
    return errors
}

/*This function is an API that responds to the signup post request provided by the user,
  it adds the users info into the DB and return an error if the provided data are not
  match the defined requirements.
    @Parameters: 
        -req: to get the data provided by the user
        -res: to respond to the users req
    @return:
        -This is a void function that designed to respond to the signing up req's.
*/ 
async function createUser(req, res){
    const {first_name, last_name, region, email, phone, password} = req.body    
    try{
        const user = await User.create({first_name, last_name, region, email, phone, password})
        res.status(201).json(user)
    }
    catch(err){
        console.log(handleError(err))
        res.status(400).send(handleError(err))
    }

}


//Exporting the functions to used in the routers.
module.exports = {
    createUser
}