const express = require('express');
const router = express.Router();

const usercontroller = require('../../app/controllers/UserController');

router.post('/dat-lich-hen/:id_user', usercontroller.appointment);
router.get('/lich-hen/:id_user', usercontroller.list_appointment);

module.exports = router;
