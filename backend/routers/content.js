const express = require('express')
const router = express.Router()
const content = require('../controllers/content')


router.post('/add/post', content.createPost)
router.get('/all/public/users', content.getAllPbUsers)
router.get('/all/public/content', content.getAllPbContent)
router.get('/all/user/posts', content.getAllPosts)
router.post('/update/bio', content.editBio)
// router.get('/update/bio', content.getBio)
router.get('/update/bio/:id', content.getBio)


module.exports = router