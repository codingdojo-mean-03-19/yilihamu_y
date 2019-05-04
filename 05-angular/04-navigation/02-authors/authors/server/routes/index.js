const allRouter = require('./allRoutes');
const router = require('express').Router();
const authorRouter = require('./route');
const api = require('express').Router();


router.use('/authors', authorRouter);

module.exports = api.use('/api', router).use(allRouter);
