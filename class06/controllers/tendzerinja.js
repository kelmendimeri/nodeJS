const Tendzere = require('../models/Tendzere');

const getAllTendzerinja = async (req, res, next) => {
  try {
    const tendzerinja = await Tendzere.find();
    return res.status(200).json(tendzerinja);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const addNewTendzere = async (req, res, next) => {
  const tendzereBody = req.body;
  const newTendzere = {
    color: tendzereBody.color,
  };

  try {
    await Tendzere.create(newTendzere);
    return res.status(201).json('Tendzere added!');
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getTendzereById = async (req, res, next)=>{
    const id = req.params.id;
    const tendzere = Tendzere.findOne(id);
    try{
        await res.status(200).json(tendzere)
    }catch(err){
        return res.status(500).json(err);
    }
}

const updateTendzere = async (req, res, next) => {
  const id = req.params.id;
  const tendzereBody = req.body;

  const newTendzere = {
    color: tendzereBody.color,
  };

  try {
    await Tendzere.findByIdAndUpdate(id, newTendzere);
    return res.status(200).json('Updated tendzere!');
  } catch (error) {
    return res.status(500).json(error);
  }
};


const deleteTendzere = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Tendzere.findByIdAndDelete(id);
    return res.status(200).json('Deleted tendzere with ID: ' + id);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllTendzerinja,
  addNewTendzere,
  getTendzereById,
  updateTendzere,
  deleteTendzere,
};