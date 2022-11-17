//Importing the required packages
const express = require("express");
const router = express();
const Content = require("../models/Content");
const User = require("../models/User");

/*This function is an API that responds to the signup post request provided by the user,
  it adds the users info into the DB and return an error if the provided data are not
  match the defined requirements.
    @Parameters: 
        -req: to get the data provided by the user
        -res: to respond to the users req
    @return:
        -This is a void function that designed to respond to the signing up req's.
*/
async function createPost(req, res) {
    //  user = User.find({})
    //Grapping the data given by the user.
    const { content_type, realm, content, creator_id, public } = req.body;
    try {
        //adding the user account into the DB
        const user = await Content.create({
        content_type, realm, content, creator_id, public
        });
        //res.json({token}).status(201); 
    } 
    catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
}

  /*This function is an API that responds to the get request of all public users,
  it adds the users info into the DB and return an error if the provided data are not
  match the defined requirements.
    @Parameters: 
        -req: to get the data provided by the user
        -res: to respond to the users req
    @return:
        -This is a void function that designed to respond to the signing up req's.
*/
async function getAllPbUsers(req, res) {
  
  // Find by email
  let users = await User.find({public: 'true'}, function(err, users) {
    if (err) return res.send(err) 
    res.send(users) 
  }).clone().catch(function(err){ console.log(err)}) 
}

  /*This function is an API that responds to the get request of all public users,
  it adds the users info into the DB and return an error if the provided data are not
  match the defined requirements.
    @Parameters: 
        -req: to get the data provided by the user
        -res: to respond to the users req
    @return:
        -This is a void function that designed to respond to the signing up req's.
*/
async function getAllPbContent(req, res) {
  
    // Find by email
    let content = await Content.find({$or:[ {public:'true'}, {creator_id: 'Anonymous'}]}, function(err, content) {
      if (err) return res.send(err) 
      res.send(content) 
    }).clone().catch(function(err){ console.log(err)}) 
  }

//Exporting the functions to used in the routers.
module.exports = {
    createPost,
    getAllPbUsers,
    getAllPbContent,
  };

