const logRequest = (req,res,next) => {
    console.log("terjadi log path : ",req.path);
    next();
}

module.exports = logRequest;