const fs = require('fs');
const path = require('path');
const server = require('../../server');

module.exports = {
    retrieveImagesFoldersNames: function () {
        let res = [];
        let files = fs.readdirSync(server.base_path);

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

        let my_path = path.join(server.base_path + folder);
        let files = fs.readdirSync(my_path);
        let res = [];

        files.forEach(function (item) {
            if (item[0] !== '.' && item.split('.')[1] !== undefined) {
                res.push(item);
            }
        });

        return res;
    }
};
