const notFound = ((req, res, next) => {
    const error = Error(`Route ${req.originalUrl} not found`);
    error.statusCode = 404;
    next(error);
});

module.exports = notFound;