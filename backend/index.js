//Importing the required packages
const cors = require("cors");
const express = require("express");
const app = express();
const User = require("./models/User");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
app.use(cors());
app.use(cookieParser());
require("dotenv").config();
//app.use(express.static('static'))
app.use(express.json());

//Importing the routers
app.use("/", require("./routers/user"));
app.use("/", require("./routers/content"));

//Connecting to the DB
const dbUrl = `mongodb+srv://mahdiatubly:${process.env.dbUrl}@viewsapp.pi4hcan.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(dbUrl).then((r) => {
  console.log("The DB Connection succeed!");
  app.listen(4000, () => {
    console.log("App listening on port 4000!");
  });
});
