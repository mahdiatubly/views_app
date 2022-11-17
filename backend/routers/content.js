const express = require('express')
const router = express.Router()
const content = require('../controllers/content')


router.post('/add/post', content.createPost)
router.get('/all/public/users', content.getAllPbUsers)
router.get('/all/public/content', content.getAllPbContent)








module.exports = router