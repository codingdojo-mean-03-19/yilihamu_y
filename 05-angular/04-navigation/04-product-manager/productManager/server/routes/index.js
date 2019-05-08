const router = require('express').Router();
const productRouter = require('./product.route');
const apiRouter = require('express').Router();
const catchAll = require('./catch-all.route');

router.use('/products', productRouter);

module.exports = apiRouter.use('/api', router).use(catchAll);

