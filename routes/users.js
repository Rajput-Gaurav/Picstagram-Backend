// REST API FOR USERS:

const express = require('express');
const router = express.Router();

// import users Controller:
const UsersController = require('../controllers/usersController');

// import users Validator:
const UsersValidator =require('../controllers/validators/usersValidator');

router.post('/login', [UsersValidator.loginValidator, UsersController.login])
router.post('/register', [UsersValidator.registerValidator, UsersController.register])


module.exports = router;