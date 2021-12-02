const router = require('express').Router();
const {getCarByConsuption, getCarByTrainPower, getCarByColorAndByConsumption, bulkInsertCars} = require('../controller/cars');

const PREFIX = process.env.PREFIX;

router.get(PREFIX + '/cars/consumption', getCarByConsuption);
router.get(PREFIX + '/cars/powerTrain', getCarByTrainPower);
router.get(PREFIX + '/cars/searchColorAndConsumption', getCarByColorAndByConsumption);
router.post(PREFIX + '/cars/', bulkInsertCars);

router.use('*', (req, res, next)=>{
    return res.status(404).json("Bad request.");
});

module.exports = router;