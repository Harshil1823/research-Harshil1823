const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
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

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, '/views')); // Set the directory for views
app.use(express.urlencoded({ extended : true })) // give access to express to we can use req.body in post


main().catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/comments', async (req, res) => {
    const comments = await Comment.find();
    res.render('comments/home', { comments });
})

app.get('/comments/:id', async (req, res) => {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.render('comments/edit', { comment })
})

app.listen(3000, () => {
    console.log('Connected!!!');
    console.log('On port 3000!!!!');
})