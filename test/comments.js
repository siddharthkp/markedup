const {test} = require('ava');
const markedup = require('../src/api.js');

test('single line', t => {
    let input = markedup('// This is a single line comment');
    let output = '<!-- This is a single line comment -->';
    t.deepEqual(input, output);
});

test('multi line', t => {
    let input = markedup(`
        /* This is a
        multi
        line
        comment
        */
    `);
    let output = markedup(`
        <!-- This is a
        multi
        line
        comment
        -->
    `);

    t.deepEqual(input, output);
});

