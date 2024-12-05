var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let testes = parseInt(lines.shift());
let i = 0;
let time ;
let speed ;
let calc = 0;
let distance = 0;
while (i < testes){
    distance = 0;
    time = lines.shift().split(" ")
    distance = parseInt(time[0]) * parseInt(time[1])
    calc = distance + calc
    i++;
}
console.log(calc)