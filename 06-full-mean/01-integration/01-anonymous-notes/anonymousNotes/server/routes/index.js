const router = require('express').Router();
const noteRouter = require('./note.route');
const apiRouter = require('express').Router();
const catchAll = require('./catch-all.route');

router.use('/notes', noteRouter);

module.exports = apiRouter.use('/api', router).use(catchAll);

