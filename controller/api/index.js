const router = require('express').Router();

//this has to be changed depending on the routes I want to make

const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes)

module.export = router;