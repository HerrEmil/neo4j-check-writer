const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();
const checkWriter = require('./check-writer');

console.log(checkWriter.translate(parseFloat(input)));
