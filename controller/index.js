const router = require('express').Router();
console.log('working');
// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;