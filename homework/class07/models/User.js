const mongoose = require('mongoose');

const User = mongoose.model("users", {username: String, password: String, token: String});

module.exports = User;