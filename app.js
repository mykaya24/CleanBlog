const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/addPost', (req, res) => {
    res.render('add_post');
  });

app.listen(port, () => {
  console.log('Sunucu Hazır');
});
