const {test} = require('ava');
const dang = require('../src/api.js');

test('single line', t => {
    let input = dang('// This is a single line comment');
    let output = '<!-- This is a single line comment -->';
    t.deepEqual(input, output);
});

test('multi line', t => {
    let input = dang(`
        /* This is a
        multi
        line
        comment
        */
    `);
    let output = dang(`
        <!-- This is a
        multi
        line
        comment
        -->
    `);

    t.deepEqual(input, output);
});

