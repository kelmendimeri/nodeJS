const mongoose = require('mongoose');


const ResidentSchema = new mongoose.Schema({
    _id: Number, 
    name: String, 
    hasCar: Boolean, 
    isBoomer:Boolean
});

const Resident = mongoose.model('residents', ResidentSchema);


module.exports = Resident;