const Driver = require('../core/Driver');

const getAllDrivers = async(req, res, next)=>{
    try{
        const countryQuery = req.query.country;
        var details;
        if(countryQuery){
            details = await (await Driver.find().where('country', countryQuery));
            return res.status(200).json(details);
        }else{
            details = await Driver.find();
            return res.status(200).json(details);
        }
          
        

    }catch(err){
        console.log(err);pro
        return res.status(500).json(err);
    }
};


const bulkInsertDrivers = async(req, res, next)=>{
    const driverbody = req.body;
    
    if(!driverbody || driverbody < 1){
        return res.status(404).json('Drivers are required');
    }

    try{
        await Driver.insertMany(driverbody);
        return res.status(200).json("Drivers are inserted successfully");
    }catch(err){
        return res.status(500).json(err);
    }
    
};

module.exports = {
    getAllDrivers,
    bulkInsertDrivers
};