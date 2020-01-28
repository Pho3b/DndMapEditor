const fs = require('fs');
const path = require('path');

module.exports = {

    retrieveImagesFoldersNames: function () {
        let images_folder = path.join(__dirname, '../../images/');
        let res = [];
        let files = fs.readdirSync(images_folder);

        files.forEach(function (item) {
            if (item.split('.')[1] === undefined) {
                res.push(item);
            }
        });

        return res;
    },

    retrieveFilesInsideAFolder: function (folder) {
        if (folder === '')
            return;

        let my_path = path.join(__dirname, '../../images/' + folder);
        let files = fs.readdirSync(my_path);
        let res = [];

        files.forEach(function (item) {
            if (item.split('.')[1] !== undefined) {
                res.push(item);
            }
        });

        return res;
    }

};
