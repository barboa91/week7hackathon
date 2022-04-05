const { Router } = require('express');
const controller = require("../controllers")

const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/post/:id', controller.getPostById)
router.get('/getPosts', controller.getPosts)
router.get('/getLocations', controller.getLocations)





module.exports = router;