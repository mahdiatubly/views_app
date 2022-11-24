const express = require('express')
const router = express.Router()
const cookieParser = require("cookie-parser");
router.use(cookieParser());
const authentication = require('../controllers/authentication')
const content = require('../controllers/content')


router.post('/signup', authentication.createUser)
router.post('/signin', authentication.signIn)



module.exports = router