const express = require('express');
const app = new express();

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.get('/', function(request, response){
    response.sendFile('P:\\Repository\\dndMapEditor\\index.html');
});