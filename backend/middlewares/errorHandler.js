const errorHandler = ((err, req, res, next) => {
    console.log(err);

    const statusCode = err.statusCode || 500;
    const message  = "something went wrong";
    
    res.status(statusCode).json({
        success: false,
        message: message,
    })
});

module.exports = errorHandler;