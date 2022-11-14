const express = require('express')
const router = express.Router()
const cookieParser = require("cookie-parser");
router.use(cookieParser());
const authentication = require('../controllers/authentication')


router.post('/signup', authentication.createUser)
router.post('/signin', authentication.signIn)








module.exports = router