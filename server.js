const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const utilities = require('./js/modules/utilities');
const fileUpload = require('express-fileupload');
const post_images_uploader = require('./js/modules/post_images_uploader');
const retrieve_files = require('./js/modules/retrieve_files');
const persister = require('./js/modules/persister');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const port = 5400;


server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');
server.use(
    bodyParser.json({ limit: '10mb' }),
    bodyParser.urlencoded({ extended: false, limit: '10mb' }),
    fileUpload(),
    cookieParser('secret'),
    flash()
);

server.listen(process.env.PORT || port, function () {
    console.log('App listening on port ' + port + '!');
});

server.get('/', function (req, res) {
    res.render('index', {folders: utilities.retrieveImagesFoldersNames()});
});

server.get('/upload_images', function (req, res) {
    let success = req.query.success || false;
    res.render('upload_images', {folders: utilities.retrieveImagesFoldersNames(), success: success});
});

server.get('/retrieve_files', function (req, res) {
    res.send(JSON.stringify(retrieve_files.list_files(req)));
});

server.post('/images_uploader', function (req, res) {
    post_images_uploader.upload_images(req, res);
});

server.post('/save_map', function (req, res) {
    persister.saveMap(req, res);
});

server.get('/load_map', function (req, res) {
    persister.loadMap(res);
});

server.use('/img', express.static(__dirname + '/images/'));
server.use('/css', express.static(__dirname + '/css/'));
server.use('/js', express.static(__dirname + '/js/'));
server.use('/ts', express.static(__dirname + '/ts/'));

module.exports = server;
