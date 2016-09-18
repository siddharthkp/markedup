const marked = require('marked');
const transforms = require('./transforms');

const api = (content, options) => {
    for (let transform of transforms) content = transform(content, options);
    return marked(content);
};

module.exports = api;
