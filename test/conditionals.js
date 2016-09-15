const {test} = require('ava');
const dang = require('../src/api.js');

test('if', t => {
    let input = dang(`<if name = 'sid':Hi sid><else if name = 'duck':Hi duck><else:Who are you?><endif>`, {name: 'sid'});
    let output = '<p>Hi sid</p>\n';
    t.deepEqual(input, output);
});

test('else if', t => {
    let input = dang(`<if name = 'sid':Hi sid><else if name = 'duck':Hi duck><else:Who are you?><endif>`, {name: 'duck'});
    let output = '<p>Hi duck</p>\n';
    t.deepEqual(input, output);
});

test('else', t => {
    let input = dang(`<if name = 'sid':Hi sid><else if name = 'duck':Hi duck><else:Who are you?><endif>`, {name: 'rando'});
    let output = '<p>Who are you?</p>\n';
    t.deepEqual(input, output);
});
