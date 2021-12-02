const {model} = require('mongoose');

const Car = model('cars', {
    make: {type: String, index:true, unique: true},
    series: String,
    powerTrain: String,
    lkmh: Number,
    color: String
})

module.exports = Car;