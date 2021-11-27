const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema({
    name: String,
    hasCar: Boolean,
    isBoomer: Boolean
});

const residentModel = mongoose.model('residents', residentSchema);

module.exports = {residentModel};