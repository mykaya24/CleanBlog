const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const ejs = require('ejs');
const postController = require('./controllers/postController');

const app = express();
mongoose.connect('mongodb://localhost/cleanblog-test-db');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

const port = 3000;

app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.get('/addPost', postController.getPostAddPage);
app.get('/post/edit/:id', postController.getPostEditPage);
app.put('/post/:id', postController.updatePost);
app.delete('/post/:id', postController.deletePost);

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log('Sunucu Hazır');
});
