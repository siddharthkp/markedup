const express = require('express');
const app = express();
const dang = require('../src/index.js');

app.engine('md', dang);
app.set('view engine', 'dang');

app.get('/', function (req, res) {
    let data = {
    star: 'Sun',
    planets: [
        {name: 'Mercury', position: 1},
        {name: 'Venus', position: 2},
        {name: 'Earth', position: 3},
        {name: 'Mars', position: 4},
        {name: 'Jupiter', position: 5},
        {name: 'Saturn', position: 6},
        {name: 'Uranus', position: 7},
        {name: 'Neptune', position: 8},
        {name: 'Pluto :(', position: 9}
    ]
};
    res.render('solar-system.md', data);
});

app.listen(3000);

