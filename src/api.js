const fs = require('fs');
const marked = require('marked');
const transforms = require('./transforms');

const api = (content, options, callback) => {
    for (let transform of transforms) content = transform(content, options);
    let rendered = marked(content);
    return callback(null, rendered);
};

module.exports = api;
