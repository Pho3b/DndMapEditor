const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const utilities = require('./js/modules/utilities');
const fileUpload = require('express-fileupload');

app.set('view engine', 'ejs');
app.set('views', __dirname + '\\views');
app.use(bodyParser.urlencoded({
    extended: false
}), fileUpload());


app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

app.get('/', function(request, response) {
    response.render('index');
});

app.get('/upload_images', function(request, response) {
    let folders = utilities.retrieveImagesFoldersNames();

    response.render('upload_images', { folders: folders });
});

app.get('/js/timer.js', function(request, response) {
    response.sendFile(__dirname + '\\js\\timer.js');
});

app.post('/images_uploader', function(req, res) {
    console.log(req.files);
    try{
        req.files.avatar.mv('P:\\Repository\\dndMapEditor\\images\\Characters\\' + req.files.avatar.name);
    } catch (e) {
        console.log("error");
    }

    let folders = utilities.retrieveImagesFoldersNames();
    res.render('upload_images', { folders: folders });
});

app.use('/img', express.static(__dirname + '/images/'));
