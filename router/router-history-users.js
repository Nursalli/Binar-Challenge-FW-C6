const express = require('express');
const routerHistoryUsers = express.Router();

routerHistoryUsers.get('/', (req, res) => {
    const page = 'History Users Page';
    const title = 'History Users';

    res.render('dashboard/history-users', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
});

routerHistoryUsers.get('/add', (req, res) => {
    const page = 'History Users Page';
    const title = 'Add History Users';

    res.render('dashboard/add/add-history-user', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
});

routerHistoryUsers.get('/edit/:id', (req, res) => {
    const page = 'History Users Page';
    const title = 'Edit History Users';

    res.render('dashboard/edit/edit-history-user', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
});

module.exports = { routerHistoryUsers }