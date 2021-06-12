// Installed Dependencies
const apiRouter = require('express').Router();

// Custom Dependencies
const TestApiHandler = require('../handlers/test-api-handler');

apiRouter.get('/test', TestApiHandler);

// Add more routes

module.exports = apiRouter;
