const router = require('express').Router();
const postController = require('../controllers/post-controller');
const contactController = require('../controllers/contact-controller');
router.get('/posts', postController.getPost);
router.post('/post',postController.create);
router.post('/post/contact',contactController.postContact)
module.exports =  router;