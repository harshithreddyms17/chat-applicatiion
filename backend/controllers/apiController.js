const getApiStatus = ((req, res, next) =>  {
    try{
        res.send("API is running successfully");
    }
    catch(err){
        next(err);
    }
})

module.exports = { getApiStatus };