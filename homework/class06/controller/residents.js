const models = require("../models/Resident");

const getAllResidents = async(req, res, next) => {
    try{
        const residents = await models.residentModel.find();
        // res.status(200).json(residnets);
        res.render('../index.ejs', {favoriteData: residents});
    }catch(err){
        res.status(500).json(err)
    }
}

const addNewResident = async(req, res, next) => {
    const residentBody = req.body;
    const newResident = {
        // _id: models.residentModel.length + 1, --> Id is an Object automaticly added
        // so we gonna use name as primary
        name: residentBody.name,
        hasCar: residentBody.hasCar,
        isBoomer: residentBody.isBoomer,
    };    

    const residentExist = await models.residentModel.findOne({name: residentBody.name});
    try{
        if(residentExist){
            res.status(409).json("Exist");
        }else{
            await models.residentModel.create(newResident);
            res.status(200).json("Added");
        }
    }catch(err){
        res.status(500).json(err);   
    }
};

const updateResident = async(req, res, next)=>{
    const params = req.params.name;
    const residentBody = req.body;
    const residnetInfo = {
        name: residentBody.name,
        hasCar: residentBody.hasCar,
        isBoomer: residentBody.isBoomer
    };

    const residentExist = await models.residentModel.findOne({name: params});
    if(residentExist){
        try{
            await models.residentModel.updateOne({name: params}, residnetInfo);
            return res.status(200).json("Resident Edited");
        }catch(err){
            return res.status(500).json(err);
        }
    }
    else{
        return res.status(409).json("No edit performed.");
    }
};

const deleteResident = async(req, res, next) => {
    const params = req.params.name;
    const residentExist = await models.residentModel.findOne({name: params});
    if(residentExist){
        try{
            await models.residentModel.findOneAndRemove({name: params});
            return res.status(200).json("Resident deleted");
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(409).json("No edit performed.");
    }
};


module.exports = {
    getAllResidents,
    addNewResident,
    updateResident,
    deleteResident
};