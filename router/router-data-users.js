const express = require('express');
const routerDataUsers = express.Router();

routerDataUsers.get('/', (req, res) => {
    const page = 'Data Users Page';
    const title = 'Data Users';

    res.render('dashboard/data-users', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
});

routerDataUsers.get('/add', (req, res) => {
    const page = 'Data Users Page';
    const title = 'Add Data Users';

    res.render('dashboard/add/add-data-user', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
});

routerDataUsers.get('/edit/:id', (req, res) => {
    const page = 'Data Users Page';
    const title = 'Edit Data Users';

    res.render('dashboard/edit/edit-data-user', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
});

module.exports = { routerDataUsers }