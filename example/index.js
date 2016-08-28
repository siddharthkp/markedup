const express = require('express');
const app = express();
const dang = require('../src/index.js');

app.engine('md', dang);
app.set('view engine', 'dang');

app.get('/', function (req, res) {
    res.render('solar-system.md', {
        star: 'Sun',
        planets: [
            'Mercury',
            'Venus',
            'Earth',
            'Mars',
            'Jupiter',
            'Saturn',
            'Uranus',
            'Neptune',
            'Pluto :('
        ]
    });
});

app.listen(3000);

