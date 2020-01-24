const fs = require('fs');
const path = require('path');

module.exports = {

    retrieveImagesFoldersNames: function () {
        let images_folder =  path.join(__dirname, '..\\..\\images\\');
        let res = [];
        let files = fs.readdirSync(images_folder);

        files.forEach(function(item,index ) {
            if (item.split('.')[1] === undefined) {
                res.push(item);
            }
        });
       return res;
    }

};
