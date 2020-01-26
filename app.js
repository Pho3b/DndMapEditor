const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const utilities = require('./js/modules/utilities');
const fileUpload = require('express-fileupload');
const post_images_uploader = require('./js/modules/post_images_uploader');
const retrieve_files = require('./js/modules/retrieve_files');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');



app.set('view engine', 'ejs');
app.set('views', __dirname + '\\views');
app.use(
    bodyParser.urlencoded({
        extended: false
    }),
    fileUpload(),
    cookieParser('secret'),
    flash()
);


app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

app.get('/', function(req, res) {
    res.render('index', { folders: utilities.retrieveImagesFoldersNames()});
});

app.get('/upload_images', function(req, res) {
    let success = req.query.success || false;
    res.render('upload_images', { folders: utilities.retrieveImagesFoldersNames(), success: success });
});

app.get('/retrieve_files', function(req, res) {
    res.send(JSON.stringify(retrieve_files.list_files(req)));
});

app.post('/images_uploader', function(req, res) {
    post_images_uploader.upload_images(req, res);
});

app.use('/img', express.static(__dirname + '/images/'));
app.use('/css', express.static(__dirname + '/css/'));
app.use('/js', express.static(__dirname + '/js/'));
app.use('/ts', express.static(__dirname + '/ts/'));

module.exports = app;