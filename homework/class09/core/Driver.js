const {model, Types} = require('mongoose');

const Driver = model("drivers", 
    {
        name: {type: String, index: true},
        country: {type: String, index: true},
        experience: {type: Number},
        carId: Types.ObjectId,
    }
);

module.exports = Driver;