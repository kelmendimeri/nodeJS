const Car = require('../model/Car');

const getCarByConsuption = async(req, res, next)=>{
    const carConsumptionFrom = +req.query.gasConsumptionFrom;
    const carConsumptionTo = +req.query.gasConsumptionTo;
    try{
        const matchingConsumption = await Car.find({
            $and: [{"lkmh": {$gte: carConsumptionFrom}},{"lkmh": {$lte: carConsumptionTo}}]});
        res.render('../views/index.ejs', {favoriteData: matchingConsumption, notice: ""});
    }catch(err){
        return res.status(500).json(err);
    }
};

const getCarByTrainPower = async(req, res, next)=>{
    const carPowerTrain = req.query.powerTrain.toLowerCase();
    try{
        const matchingPowerTrain = await Car.find().where('powerTrain', carPowerTrain);

        res.render('../views/index.ejs', {favoriteData: matchingPowerTrain, notice: ""});
    }catch(err){
        return res.status(500).json(err);
    }
};

const getCarByColorAndByConsumption = async(req, res, next)=>{
    // const carColor = req.query.color.toLowerCase();
    // const carConsumptionTo = +req.query.gasConsumptionTo; -->gaved me an error for casting => should be casted
    try{
        const matchingConsumption = await Car.find({
            $and: [
                { "color": req.query.color.toLowerCase()},
                { "lkmh": {$lte: req.query.gasConsumptionTo}} 
            ]
        });
        res.render('../views/index.ejs', {favoriteData: matchingConsumption, notice: ""});
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
};

const bulkInsertCars = async(req, res, next)=>{
    const carInfo = req.body.cars;
    if(!carInfo){
        return res.status(400).json('Invalid request');
    }
    try{
        await Car.insertMany(carInfo);
        return res.status(200).json('Cars inserted');
    }catch(err){
        return res.status(500).json(err);
    }

};


module.exports = {
    getCarByConsuption,
    getCarByTrainPower, 
    getCarByColorAndByConsumption,
    bulkInsertCars
};