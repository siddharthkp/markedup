const {test} = require('ava');
const dang = require('../src/api.js');

test('loops', t => {
    let input = dang('<* name in names>', {names: ['sid', 'duck']});
    let output = '<ul>\n<li>sid</li>\n<li>duck</li>\n</ul>\n';
    t.deepEqual(input, output);
});
