const { bulkInsertCars, getCars } = require('../controller/cars');
const { bulkInsertDrivers, getAllDrivers } = require('../controller/drivers');

const router = require('express').Router();

const PREFIX = process.env.PREFIX;

//routes will go here
router.route(PREFIX + '/drivers').get(getAllDrivers).post(bulkInsertDrivers);
router.route(PREFIX + '/cars').get(getCars).post(bulkInsertCars);


router.use("*", (req, res, next)=>{
    return res.status(400).json("Not Found");
});

module.exports = router;