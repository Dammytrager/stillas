// Custom Dependencies
const CustomError = require('../utils/errors');

const TestApiHandler = async (req, res, next) => {
    try {

        return res.json({message: 'api endpoint works like charm'}).end()

    } catch (e) {

        return next(new CustomError(e.message, e));

    }
};

module.exports = TestApiHandler;
