const { User_games } = require('../models');

const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const index = (req, res) => {
    const page = 'Login Page';
    const author = 'Muhammad Nursalli';
    const copyrightYear = new Date().getFullYear();

    res.render('index', {
        layout: false,
        page,
        author, 
        copyrightYear,
        msg: req.flash('msg')
    });
}

const authentication = async (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        // res.status(400).json({
        //     errors: errors.array()
        // });
        req.flash('msg', "Username/Password Can't be Empty!");
        res.redirect('/');
    } else {
        // res.json({
        //     status: 'success'
        // });
        const username = req.body.username;
        const password = req.body.password;

        const checkUsername = await User_games.findOne({
            where: {
                username
            }
        });

        if(checkUsername){
            const checkPassword = bcrypt.compareSync(password, checkUsername.password);
            const checkSuperUser = (checkUsername.role === 'Super User') ? true : false;

            if(checkPassword && checkSuperUser){
                const userToken = {
                    id: checkUsername.id,
                    username: checkUsername.username
                }

                jwt.sign({ userToken }, process.env.JWT_KEY, {
                    expiresIn: '20s'
                }, (err, token) => {
                    // res.status(200).json({ token: token });
                    // res.setHeader('Authorization', 'Bearer '+ token);
                    res.redirect('/dashboard');
                });

            } else {
                // res.status(400).json({
                //     status: 'Login Unsuccessful'
                // })
                // return false;
                req.flash('msg', 'Wrong Username/Password!');
                res.redirect('/');
            }
        } else {
            // res.status(400).json({
            //     status: 'Login Unsuccessful'
            // })
            // return false;
            req.flash('msg', 'Wrong Username/Password!');
            res.redirect('/');
        }

    }
}

const logout = (req, res) => {
    res.redirect('/');
}

module.exports = { index, authentication, logout }