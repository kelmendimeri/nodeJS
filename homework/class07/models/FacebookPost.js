const mongoose = require('mongoose');


const FacebookPost = mongoose.model('facebookposts', {
    title: String,
    content: String,
    timeOfPost: Date
});

module.exports = FacebookPost;