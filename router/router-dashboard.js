const express = require('express');
const routerDashboard = express.Router();

const { index } = require('../controllers/dashboard');

routerDashboard.get('/', index);

module.exports = { routerDashboard };