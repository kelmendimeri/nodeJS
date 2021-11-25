const bodyValidation = async (req, res, next) => {
    const body = req.body;
    if(!body.color){
        return res.status(400).json("Missing color of tendzere");
    }
    return next();
};


module.exports = bodyValidation;