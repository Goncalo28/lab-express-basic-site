const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();

app.use(express.static('public'));

//home page
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
});

//works page
app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html');
});

//photo-gallery page
app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/photo-gallery.html');
});

//about page
app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html');
});


app.listen(3000, () => {
    console.log('App running on port 3000');
});