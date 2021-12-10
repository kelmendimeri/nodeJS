const {model} = require('mongoose');

const Driver = model("cars", 
    {
        make: {type: String, index: true},
        model: String,
        yearOfBuild: Date
    }
);

module.exports = Driver;