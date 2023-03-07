const express = require('express')
const router = express.Router()
const usersController =   require('../controllers/users.controller');
// Retrieve all users
router.get('/', usersController.findAll);
router.post('/login', usersController.findUser);
module.exports = router;