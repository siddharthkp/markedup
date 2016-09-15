const {test} = require('ava');
const dang = require('../src/api.js');

test('variables', t => {
    let input = dang('Hello <name>', {name: 'sid'});
    let output = '<p>Hello sid</p>\n';
    t.deepEqual(input, output);
});
