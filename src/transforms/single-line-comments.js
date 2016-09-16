const htmlTags = require('html-tags');
const getData = require('../helpers/get-data');

let transform = (content, data) => {
    let re = /\/\/(.*)/g;
    let matches = content.match(re);

    if (!matches) return content;
    for (let match of matches) {
        let htmlComments = match.replace('//', '<!--');
        htmlComments = htmlComments + ' -->';
        content = content.replace(match, htmlComments);
    }

    return content;
};

module.exports = transform;
