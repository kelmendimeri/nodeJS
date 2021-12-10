const Car = require('../core/Car');

const getCars = async(req, res, next)=>{
    try{
        const countryQuery = req.query.make;
            const details = await Car.aggregate([
                {
                    $lookup: {
                        from: "drivers",
                        localField: "_id",
                        foreignField: "carId",
                        as: "fullDetails",
                    }
                }
            ,{
                $project: {
                    make: '$make',
                    model: '$model',
                    yearOfBuild: '$yearOfBuild',
                    drivers: {
                        $first: '$fullDetails'
                    },
                }
            }]);
            return res.status(200).json(details);
       }catch(err){
        console.log(err);pro
            return res.status(500).json(err);
        }
};

const bulkInsertCars = async(req, res, next)=>{
    const driverbody = req.body;
    
    if(!driverbody || driverbody < 1){
        return res.status(404).json('Drivers are required');
    }

    try{
        await Car.insertMany(driverbody);
        return res.status(200).json("Cars are inserted successfully");
    }catch(err){
        return res.status(500).json(err);
    }
    
};

module.exports = {
    bulkInsertCars,
    getCars
}