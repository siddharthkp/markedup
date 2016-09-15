const fs = require('fs');
const dang = require('../src/api.js');

let data = {
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
};

fs.readFile('./views/solar-system.md', (err, content) => {
    content = content.toString();
    let rendered = dang(content, data);
    console.log(rendered);
});

