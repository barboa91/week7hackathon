const { Router } = require('express')
const controller = require('../controllers')

const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/post/:id', controller.getPostById)
router.get('/getPosts', controller.getPosts)
router.get('/getLocations', controller.getLocations)
router.get('/getComments', controller.getComments)
router.get('/getcommentbyid/:id', controller.getCommentById)



router.post('/postComment/:id',controller.addComment)
router.post('/likePost/:id',controller.likePost)



module.exports = router
