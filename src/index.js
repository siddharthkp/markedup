const fs = require('fs');
const marked = require('marked');
const transforms = require('./transforms');

const dang = (filePath, options, callback) => {
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));
        content = content.toString();
        for (let transform of transforms) content = transform(content, options);
        let rendered = marked(content);
        return callback(null, rendered);
  });
};

module.exports = dang;
