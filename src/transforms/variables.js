const htmlTags = require('html-tags');
const getData = require('../helpers/get-data');

let transform = (content, data) => {
    let re = /<(.*?)>/g;
    let matches = content.match(re);

    if (!matches) return content;
    for (let match of matches) {
        let variable = match.substring(1).substring(0, match.length - 2);
        if (!htmlTags.includes(variable) && getData(data, variable)) {
            content = content.replace(match, getData(data, variable));
        }
    }
    return content;
};

module.exports = transform;
