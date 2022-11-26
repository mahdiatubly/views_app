//Importing the required packages
const express = require("express");
const router = express();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt')
router.use(cookieParser());
require("dotenv").config();

let salt = 10
/*This function is intended to handle errors caused by uncompatible data provided by user,
  it will show the precise reason behined the caused problem
        @Parameters: 
            -err: this para. intended to recive the error obj thorws by the DB
        @Return:
            -This function returns an obj. that contains the defects in each
             field.
*/
function handleError(err) {
  console.log(err.message, err.code);
  let errors = { email: "", phone: "", password: "" };

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach((error) => {
      errors[error.properties.path] = error.properties.message;
    });
  }

  //Duplicate field error `err.code`
  if (err.code === 11000 && err.keyPattern.email === 1) {
    errors.email = "This email is already used";
  } else if (err.code === 11000 && err.keyPattern.phone === 1) {
    errors.phone = "This phone number is already used";
  }

  return errors;
}

//This var. define the time of each session
const maxAge = 60 * 60 * 7

/*This function is an API that responds to the signup post request provided by the user,
  it adds the users info into the DB and return an error if the provided data are not
  match the defined requirements.
    @Parameters: 
        -req: to get the data provided by the user
        -res: to respond to the users req
    @return:
        -This is a void function that designed to respond to the signing up req's.
*/
async function createUser(req, res) {
  let public = true
  //Grapping the data given by the user.
  const { first_name, last_name, region, email, phone, password } = req.body;
  try {
    let hashedPassword = bcrypt.hashSync(req.body.password, salt)
    console.log(hashedPassword);
    //adding the user account into the DB
    const user = await User.create({
      first_name,
      last_name,
      region,
      email,
      phone,
      password: hashedPassword,
      public,
    });

    // JWT Token
    const payload = {
      user: {
        id:user._id,
        first_name: user.first_name, 
        public: user.public
      }
  }
    //Creating the jwt.
    jwt.sign(
      payload,
      process.env.secret,
      { expiresIn: maxAge},
      (err, token) => {
          if(err) throw err;
          res.json({token}).status(201);
      }) 
  } 
  catch (err) {
    console.log(handleError(err));
    res.status(400).send(handleError(err));
  }
}

/*This function is an API that responds to the signin post request provided by the user,
  it will login the users into the app and return an error if the provided data are not
  match the defined requirements.
    @Parameters: 
        -req: to get the data provided by the user
        -res: to respond to the users req
    @return:
        -This is a void function that designed to respond to the signing in req's.
*/
const signIn = async (req, res) =>{
  //Grapping the data given by the user.
  let {email, password} = req.body;
    console.log(email);

    try{
        let user = await User.findOne({email}); // email: email
        console.log(user);

        if(!user){
            return res.json({message: "User not found"}).status(400);
        }

        // Password Comparison
        const isMatch = await bcrypt.compareSync(password, user.password);
        console.log(password); // Plaintext password
        console.log(user.password);
         // Encrypted password
        console.log(isMatch)
        if(!isMatch) {
            return res.json({message: "Password not matched"}).status(401);
        }
        
        // JWT Token
        const payload = {
            user: {
              id:user._id,
              first_name: user.first_name, 
              public: user.public
            }
        }

        jwt.sign(
            payload,
            process.env.secret,
            { expiresIn: maxAge},
            (err, token) => {
                if(err) throw err;
                res.json({token}).status(200);
            }
        )
    } catch (error) {
        console.log(error)
        res.json({message: "You are not loggedin!. Try again later."}).status(400);
    }
}

//Exporting the functions to used in the routers.
module.exports = {
  createUser,
  signIn,
};





