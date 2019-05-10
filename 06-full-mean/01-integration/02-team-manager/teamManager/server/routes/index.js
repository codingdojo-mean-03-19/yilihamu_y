const router = require('express').Router();
const playerRouter = require('./player.route');
const apiRouter = require('express').Router();
const catchAll = require('./catch-all.route');

router.use('/players', playerRouter);

module.exports = apiRouter.use('/api', router).use(catchAll);

