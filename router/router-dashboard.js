const express = require('express');
const routerDashboard = express.Router();

routerDashboard.get('/', (req, res) => {
    const page = 'Dashboard Page';
    const title = 'Dashboard';

    res.render('dashboard/index', {
        layout: 'dashboard/layouts/main',
        page,
        title
    });
});

module.exports = { routerDashboard };