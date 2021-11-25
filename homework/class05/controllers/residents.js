const models = require('../models/Resident');

const getAllResidents = async (req, res, next) => {
    
    const residents = await models.getAllResidents();
    if(residents){
        return res.status(200).json(residents);
    }else{
        return res.status(500).json("Internal server error");
    }
};

const getResidnetById = async(req, res, next)=>{
    const id = +req.params.id;
    try{
        const resident = await models.getResident(id);
        return res.status(200).json(resident);
    }
    catch(err){console.log(err);}    
};

const addNewResident = async(req, res, next)=>{
    const residentBody = req.body;
    const residentExist = (await models.getAllResidents()).find((resident) =>{ return resident.name === residentBody.name});
    if(residentBody.name === undefined || residentBody.hasCar === undefined || residentBody.isBoomer === undefined){
        return res.status(400).json("Bad request, missing info.");
    }else{
    await models.addResident(residentBody);
     if(!residentExist){
        return res.status(200).json('Resident added!');
     }
     else{
        res.status(409).json("An existing item already exists.");
     }
    };
}
  
const updateResident = async(req, res, next)=>{
    const id = +req.params.id;
    const residentBody = req.body;
    const residentExist = (await models.getAllResidents()).find((resident) =>{ return resident});
    if(residentBody.name === '' || !residentBody.hasCar === ''|| !residentBody.isBoomer === ''){
        return res.status(400).json("Bad request, missing info.");
    }
    
    await models.updateResident(id, residentBody);
    if(residentBody.name === residentExist.name || residentBody.hasCar === residentExist.hasCar || residentBody.isBoomer === residentExist.isBoomer ) {
        return res.status(200).json("Resident's info edited.");
    }
    else{
        return res.status(500).json("Internal server error.");
    }
};

const deleteResident = async(req, res, next)=>{
    const id = +req.params.id;
    if(!id){
        return res.status(400).json("Bad request, missing info.");
    }
    else{
        const checkExist = await models.getResident(id);
        if(checkExist){
            await models.deleteResident(id);
            return res.status(200).json("OK!");
            const checkRemoved = await models.getResident(id);
        }
        else{
            return res.status(500).json("Internal server error. Resident cannot be deleted.");
        }
    }
};


module.exports = {
    getAllResidents, 
    getResidnetById, 
    addNewResident, 
    updateResident,
    deleteResident
};