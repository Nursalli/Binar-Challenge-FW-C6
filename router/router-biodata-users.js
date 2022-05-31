const express = require('express');
const routerBiodataUsers = express.Router();

routerBiodataUsers.get('/', (req, res) => {
    const page = 'Biodata Users Page';
    const title = 'Biodata Users';

    res.render('dashboard/biodata-users', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
});

routerBiodataUsers.get('/add', (req, res) => {
    const page = 'Biodata Users Page';
    const title = 'Add Biodata Users';

    res.render('dashboard/add/add-biodata-user', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
});

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