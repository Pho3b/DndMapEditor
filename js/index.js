const express = require('express');
const app = new express();

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.get('/', function(request, response) {
    response.sendFile('P:\\Repository\\dndMapEditor\\html\\index.html');
});

app.get('/upload_images', function(request, response) {
    response.sendFile('P:\\Repository\\dndMapEditor\\html\\upload_images.html');
});
