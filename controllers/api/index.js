const routes = require('express').router ();
const userroutes = require('./userRoutes');
const postRoutes = require ('./postRoutes');

router.use('/users', userRoutes);
router.use('/posts',postRoutes);

module.exports = routes;