const router = require('express').Router();


//this has to be changed depending on the routes I want to make

const dashboard = require('./dashboard');
const user = require('./userRoutes');

router.use('/dashboard', dashboard);
router.use('/users', user);

module.exports = router;