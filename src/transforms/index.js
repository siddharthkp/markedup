let loops = require('./loops');
let variables = require('./variables');
let conditionals = require('./conditionals');
let singleLineComments = require('./single-line-comments');
let multiLineComments = require('./multi-line-comments');

module.exports = [
    singleLineComments,
    multiLineComments,
    loops,
    variables,
    conditionals
];
