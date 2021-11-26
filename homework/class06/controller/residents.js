const residentModel = require('../models/Resident');


const getAllResidents = async (req, res, next) => {
    try{
        const residents = await residentModel.find();
        return res.status(200).json(residents);
    }catch(err){
        return res.status(500).json(err);
    }
};


const addNewResident = async (req, res, next) => {
    const residentBody = req.body;
    const newResident = {
        _id: residentModel.length + 1,
        name: residentBody.name,
        hasCar: residentBody.hasCar,
        isBoomer: residentBody.isBoomer
    };

    const residentExist = await residentModel.findOne({name: residentBody.name});
    if(residentExist){
       return  res.status(409).json("Resident already exist");
    }
    try{
    await residentModel.create(newResident);
    return res.status(200).json("Resident added");
    }catch(err){
        return res.status(500).json(err);
    }
};

const updateResident = async (req, res, next) => {
    const id = +req.params.id;
    const residentBody = req.body;
    const editResident = {
        name: residentBody.name,
        hasCar: residentBody.hasCar,
        isBoomer: residentBody.isBoomer
    };
    try{
        await residentModel.findByIdAndUpdate(id, editResident);
        return res.status(200).json("Resident updated");
    }catch(err){
        return res.status(500).json(err);
    }
};

const deleteResident = async (req, res, next)=>{
    const id = +req.params.id;
    try{
        if(!id){
            return res.status(400).json("No resident deleted");
        }
        await residentModel.findByIdAndDelete(id);
        return res.status(200).json("Resident deleted");
    }catch(err){
        return res.status(500).json(err);
    }
};


module.exports = {
    getAllResidents,
    addNewResident,
    updateResident,
    deleteResident
};