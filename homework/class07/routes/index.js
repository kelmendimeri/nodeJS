const router = require('express').Router();
const loginHandler = require('../controllers/userLogin');
const registerHandler = require('../controllers/userRegister');
const { jwtMiddleware } = require('../middlewares/jwt');
const fbPostHandler = require('../controllers/fbposts');

const PREFIX = process.env.PREFIX;

router.post(PREFIX + "/register", registerHandler.registerUser);
router.post(PREFIX + "/login", loginHandler.loginUser);

router.get(PREFIX + '/fbposts', jwtMiddleware, fbPostHandler.getAllPosts);
router.post(PREFIX + '/fbposts', jwtMiddleware, fbPostHandler.addNewPost);
router.put(PREFIX + '/fbposts/:id', jwtMiddleware, fbPostHandler.updatePost);
router.delete(PREFIX + '/fbposts/:id', jwtMiddleware, fbPostHandler.deletePost);


module.exports = router;