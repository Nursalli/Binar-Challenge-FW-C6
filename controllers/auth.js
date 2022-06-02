const { User_games, User_games_biodata, User_games_histories } = require('../models');

const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const index = (req, res) => {
    const page = 'Login Page';
    const author = 'Muhammad Nursalli';
    const copyrightYear = new Date().getFullYear();

    res.render('index', {
        layout: false,
        page,
        author, 
        copyrightYear
    });
}

const authentication = async (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        // res.status(400).json({
        //     errors: errors.array()
        // });
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
            const checkPassword = bcrypt.compareSync(password, checkUsername.password)

            if(checkPassword){
                const userToken = {
                    id: checkUsername.id,
                    username: checkUsername.username
                }

                jwt.sign({ userToken }, process.env.JWT_KEY, {
                    expiresIn: '1d'
                }, (err, token) => {
                    // res.status(200).json({ token: token });
                    res.redirect('/dashboard');
                });

            } else {
                // res.status(400).json({
                //     status: 'Login Unsuccessfull'
                // })
                // return false;
                res.redirect('/');
            }
        } else {
            // res.status(400).json({
            //     status: 'Login Unsuccessfull'
            // })
            // return false;
            res.redirect('/');
        }

    }
}

module.exports = { index, authentication }