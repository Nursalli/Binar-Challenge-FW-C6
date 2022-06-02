const express = require('express');
const routerLogin = express.Router();
const { body } = require('express-validator');

//Contoller
const { index, authentication, logout } = require('../controllers/auth');

routerLogin.get('/', index);

routerLogin.post('/', 
    [
        body('username').notEmpty(),
        body('password').notEmpty()
    ],
    authentication);

routerLogin.get('/logout', logout);

module.exports = { routerLogin }