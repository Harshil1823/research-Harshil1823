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

// Function to generate fake comments
// const createFakeComments = async () => {
//     const fakeComments = [
//         { username: 'user1', comment: 'This is a test comment.' },
//         { username: 'user2', comment: 'Another test comment.' },
//         { username: 'user3', comment: 'Yet another test comment.' },
//     ];

//     try {
//         await Comment.insertMany(fakeComments);
//         console.log('Fake comments added successfully!');
//     } catch (err) {
//         console.log('Error adding fake comments:', err);
//     }
// };


module.exports = { Comment };
