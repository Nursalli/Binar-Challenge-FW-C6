const express = require('express');
const routerDataUsers = express.Router();
const { body } = require('express-validator');

//Contoller
const { index, duplicate, add, addPost, edit } = require('../controllers/user-games');

routerDataUsers.get('/', index);

routerDataUsers.get('/add', add);

routerDataUsers.post('/add', 
    [
        body('username').custom(async (data) => {
            const check = await duplicate(data);
            if(check){
                throw new Error('Username Already Exists');
            }else{
                return true;
            }
        }),
        body('password').isLength({ min: 5})
    ],
    addPost);

routerDataUsers.get('/edit/:id', edit);

module.exports = { routerDataUsers } 