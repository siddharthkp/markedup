const fs = require('fs');
const marked = require('marked');

let replaceVariables = (content, data) => {
    var re = /\${(.*?)}/g;
    let matches = content.match(re);
    for (let match of matches) {
        let variable = match.substring(2).substring(0, match.length - 3);
        content = content.replace(match, data[variable]);
    }
    return content;
};

const dang = (filePath, options, callback) => {
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));
        let rendered = marked(replaceVariables(content.toString(), options));
        return callback(null, rendered);
  });
};

module.exports = dang;
