const fs = require('fs');
const api = require('./api');

const markedup = (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(new Error(err));
        content = content.toString();
        let rendered = api(content, options);
        return callback(null, rendered);
    });
};

module.exports = markedup;
