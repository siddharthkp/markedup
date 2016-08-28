const express = require('express');
const app = express();
const dang = require('../src/index.js');

app.engine('md', dang);
app.set('view engine', 'dang');

app.get('/', function (req, res) {
    res.render('hello.md', {
        message: 'hello'
    });
});

app.listen(3000, function () {
    console.log('Server started');
});
