const CustomError = function (message, e = null, status = 500) {
    this.status = status;
    this.message = message;
    this.error = e;
}

module.exports = CustomError;
