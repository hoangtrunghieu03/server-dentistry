const express = require('express');
const router = express.Router();

const passportcontroller = require('../../app/controllers/PassportController');

router.post('/login', passportcontroller.login);
router.post('/register', passportcontroller.register);

module.exports = router;