const {connect} = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const dbConnector = connect(MONGO_URI);

module.exports = dbConnector;