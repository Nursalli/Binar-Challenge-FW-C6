const { User_games } = require('../models');
const { Op } = require("sequelize");

const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const index = async (req, res) => {
    const page = 'Data Users Page';
    const title = 'Data Users';

    const data = await User_games.findAll({
        where: {
            role: {
                [Op.ne] : 'Super User'
            }
        }
    });

    res.render('dashboard/data-users', {
        layout: 'dashboard/layouts/main',
        page,
        title,
        data,
        msg: req.flash('msg')
    });
}

const duplicate = (username) => {
    return User_games.findOne({
        where: {
            username
        }
    });
}

const add = (req, res) => {
    const page = 'Data Users Page';
    const title = 'Add Data Users';

    res.render('dashboard/add/add-data-user', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
}

const addPost = (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const page = 'Data Users Page';
        const title = 'Add Data Users';

        res.render('dashboard/add/add-data-user', {
            layout: 'dashboard/layouts/main',
            page,
            title,
            errors: errors.array()
        });
    } else {
        User_games.create({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10)
        })
            .then((data) => {
                req.flash('msg', 'Data User Created!');
                res.redirect('/dashboard/data-users');
            });
    }
}

const edit = (req, res) => {
    const page = 'Data Users Page';
    const title = 'Edit Data Users';

    res.render('dashboard/edit/edit-data-user', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
}

module.exports = { index, duplicate, add, addPost, edit }