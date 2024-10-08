const express = require('express');
const app = express();
const mongoose = require('mongoose');


async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/commentsApp');
        console.log('Mongoose connection is open');
    }
    catch (err) {
        console.log('connection failed', err);
    }
}



app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3000, () => {
    console.log('Connected!!!')
    console.log('On port 3000!!!!');
})