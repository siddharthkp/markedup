const htmlTags = require('html-tags');
const getData = require('../helpers/get-data');

let transform = (content, data) => {
    let re = /\/\*((.||\n)*?)\*\//g;
    let matches = content.match(re);

    if (!matches) return content;
    for (let match of matches) content = content.replace(match, '');

    return content;
};

module.exports = transform;
