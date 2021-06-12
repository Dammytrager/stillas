// Installed Dependencies
const express = require('express');
const app = express();
const logger = require('morgan');
const expHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
require('dotenv').config({path: 'env/.env'});

// Custom Dependencies
const appConfig = require('./src/config/app-config');
const sequelize = require('./src/config/db');
const requireSourceAppID = require('./src/middlewares/source-app-id');
const ErrorHandler = require('./src/handlers/error-handler');
const NotFoundHandler = require('./src/handlers/not-found-handler');
const router = require('./src/routes');

// Initializing
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/', async (req, res, next) => {
    res.json({
        status: 'OK',
        message: 'Works like Charm! -_-'
    }).end();
});

// Routes
app.use(router);

// Capture Invalid Urls
app.use(NotFoundHandler);

// Handles all errors
app.use(ErrorHandler);

const server = app.listen(appConfig.port, () => {
    console.log(`${appConfig.name} started on port ${appConfig.port}`);
});
