const express = require('express');
const app = new express();


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '\\html\\index.html');
});

app.get('/upload_images', function(request, response) {
    response.sendFile(__dirname + '\\html\\upload_images.html');
});

app.get('/js/timer.js', function(request, response) {
    response.sendFile(__dirname + '\\js\\timer.js');
});

app.use('/img', express.static(__dirname + '/images/'));
