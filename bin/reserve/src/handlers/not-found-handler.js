// Installed Dependencies
const { StatusCodes } = require('http-status-codes');

// Custom Dependency
const CustomError = require('../utils/errors');

const NotFoundHandler = (req, res, next) => {
    const error = new CustomError(`The path ${req.url} doesn't exist or has been removed`, null, StatusCodes.NOT_FOUND);
    return next(error)
};

module.exports = NotFoundHandler;
