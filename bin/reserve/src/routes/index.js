// Installed Dependencies
const router = require('express').Router();

// Custom Dependencies
const apiRouter = require('./api-router');

router.use('/api', apiRouter);

module.exports = router;
