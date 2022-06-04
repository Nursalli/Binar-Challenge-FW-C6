const express = require('express');
const routerBiodataUsers = express.Router();
const { body } = require('express-validator');

//Contoller
const { index, add, checkUser, duplicateUserBiodata, duplicateEmailBiodata, checkBirthdateBiodata, addPost, 
    findUser, edit, editPost, deletePost } = require('../controllers/user-biodata');

routerBiodataUsers.get('/', index);

routerBiodataUsers.get('/add', add);

routerBiodataUsers.post('/add', 
    [
        body('id_user').custom(async (data) => {
            const checkUserGames = await checkUser(parseInt(data));
            const checkUserBiodata = await duplicateUserBiodata(parseInt(data));
            if(checkUserGames && checkUserBiodata){
                throw new Error('Biodata User Already Exists');
            }else if(!checkUserGames){
                throw new Error('User Invalid');
            } else {
                return true;
            }
        }),
        body('id_user').notEmpty(),
        body('email').custom(async (data) => {
            const check = await duplicateEmailBiodata(data);
            if(check){
                throw new Error('Email Already Exists');
            }else{
                return true;
            }
        }),
        body('email').isEmail(),
        body('birthdate').notEmpty(),
        body('birthdate').custom(async (data) => {
            const check = await checkBirthdateBiodata(data);
            if(check){
                throw new Error('Birthdate Invalid');
            }else{
                return true;
            }
        })
    ],
    addPost);

routerBiodataUsers.get('/edit/:id', (req, res) => {
    const page = 'Biodata Users Page';
    const title = 'Edit Biodata Users';

    res.render('dashboard/edit/edit-biodata-user', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
});

module.exports = { routerBiodataUsers }