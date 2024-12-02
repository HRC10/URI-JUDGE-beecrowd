var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ')

let t1 = parseInt(lines.shift());
let t2 = parseInt(lines.shift());
let t3 = parseInt(lines.shift());
let t4 = parseInt(lines.shift());
console.log((t1-1)+(t2-1)+(t3-1)+t4);

