const express = require('express')
const router = express.Router()
const content = require('../controllers/content')


router.post('/add/post', content.createPost)
router.get('/all/public/users', content.getAllPbUsers)
router.get('/all/public/content', content.getAllPbContent)
router.get('/all/user/posts', content.getAllPosts)
router.post('/update/bio', content.editBio)
router.post('/update/state', content.updateState)
router.get('/update/bio/:id', content.getBio)
router.get('/nature', content.getNatureContent)
router.get('/science', content.getScienceContent)
router.get('/tourism', content.getTourismContent)
router.get('/languages', content.getLanguagesContent)
router.get('/fiction', content.getFictionContent)
router.get('/art', content.getArtContent)
router.get('/culture', content.getCultureContent)
router.get('/entertainment', content.getEntertainmentContent)




module.exports = router