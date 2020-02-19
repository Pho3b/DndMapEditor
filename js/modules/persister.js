const fs = require('fs');

module.exports = {
    saveFilePath: './saved_map/save_file.txt',

    saveMap: function (req, res) {
        try {
            fs.writeFile(this.saveFilePath, JSON.stringify(req.body), function (err) {
                if (err) throw err;
            });

            return res.status(200).send();
        } catch (err) {
            return res.status(409).send('Saving failed');
        }
    },

    loadMap: function (res) {
        fs.readFile(this.saveFilePath, "utf8", function(err, data){
            if(err) throw err;

            return res.send(JSON.parse(data));
        });
    }

};
