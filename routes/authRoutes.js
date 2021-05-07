const express = require('express');
const router = express.Router();

const { login } = require('../controllers/authController');

router.post('/login', login);
//use the req.user obtained from authenticate token to access the api with the api key to obtain resources
module.exports = router;