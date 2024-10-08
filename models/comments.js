const mongoose = require('mongoose');

//creating the comments schema here
const commentSchema = new mongoose.Schema({
    username: String,
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;