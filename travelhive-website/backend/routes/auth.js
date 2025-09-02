const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/login', login);

// Make sure this is the last line
module.exports = router;