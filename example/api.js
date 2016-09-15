const fs = require('fs');
const dang = require('../src/api.js');

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

fs.readFile('./views/solar-system.md', (err, content) => {
    content = content.toString();
    let rendered = dang(content, data);
    console.log(rendered);
});

