const ErrorHandler = (err, req, res, next) => {
    console.info(err)
    return res
        .status(err.status)
        .json({
            status: 'error',
            message: err.message,
        });
};

module.exports = ErrorHandler;
