const express = require('express');
const app = express();
const mongoose = require('mongoose');
//acquire the model from mongoose
const { Comment } = require('./models/comments')

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/commentsApp');
        console.log('Mongoose connection is open');
        // createFakeComments();
    }
    catch (err) {
        console.log('connection failed', err);
    }
}

main().catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/comments', async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
})

app.listen(3000, () => {
    console.log('Connected!!!');
    console.log('On port 3000!!!!');
})