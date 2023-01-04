const express = require('express');
const router = express.Router();
const pagosControl = require('../controller/pagosControl');

router.post('/pagar', pagosControl.createPayment);

module.exports = router;