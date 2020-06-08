const https = require('https');

const title = encodeURIComponent('CiaS Bingo');
const exclamation = encodeURIComponent('BINGO!');
const free_square = encodeURIComponent('JANK');

const items = [
    'Crash',
    'Garbage',
    'Flying Cars',
    'Flood',
    'Fire',
    'Power problems',
    'Death Wave',
    'Polluted Drinking Water',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
    'Item 13',
    'Item 14',
    'Item 15',
    'Item 16',
    'Item 17',
    'Item 18',
    'Item 19',
    'Item 20',
    'Item 21',
    'Item 22',
    'Item 23',
    'Item 24',
    'Item 25',
];

const items_encoded = encodeURIComponent(items.join("\r\n"));

https.get(`https://www.buzzwordbingogame.com/cards/custom/?title=${title}&exclamation=${exclamation}&free_square=${free_square}&terms=${items_encoded}`, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    res.on('end', () => {
        console.log(data);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});