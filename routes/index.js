const express = require('express');
const app = express();
const pagosRuta = require('./pagosRuta');

app.use('/', pagosRuta)

module.exports = app;