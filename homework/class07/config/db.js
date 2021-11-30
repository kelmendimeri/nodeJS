const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const dbConnector = async()=>{
  mongoose.connect(MONGO_URI);
};

module.exports=dbConnector;