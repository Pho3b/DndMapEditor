const fs = require('fs');
const path = require('path');

module.exports = {

    save_map: function (req, res) {
        fs.appendFile('mynewfile1.txt', JSON.stringify(req.body), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });

        return res.send('ok');
    }

};
