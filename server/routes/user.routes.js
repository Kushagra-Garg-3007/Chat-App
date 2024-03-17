const express = require("express");
const router = express.Router();
const controllers = require('../controllers/user.controller.js');
const verifyJWT = require('../middlewares/auth.middleware.js');

router.post('/register', controllers.registerUser);
router.post('/login', controllers.loginUser);
router.post('/logout', verifyJWT, controllers.logoutUser);

module.exports = router;