const mongoose = require('mongoose');

const modelTendzere = mongoose.model( 'tendzerinja', { color:String } 
);


module.exports = modelTendzere;