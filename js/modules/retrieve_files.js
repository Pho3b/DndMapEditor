const utilities = require('./utilities');

module.exports = {

    list_files: function (req) {
        let folder = req.query.folder || '';
        return utilities.retrieveFilesInsideAFolder(folder);
    }

};
