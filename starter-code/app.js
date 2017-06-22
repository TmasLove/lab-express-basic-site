const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.render('home.ejs');
});

app.listen(3000);


app.get('/about', (request, response, next) => {
  response.render('about.ejs');
});

app.get('/gallery', (request, response, next) => {
  response.render('gallery.ejs');
});
