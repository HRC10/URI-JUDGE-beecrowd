var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let testes = parseInt(lines.shift());
let i = 0;
let casas = 0;
let graos = 1;
let j = 1;
while (i < testes){
    casas = parseInt(lines.shift());
    graos = 1;
    j = 1;
    while (j <= casas){
        graos = graos * 2;
        j++;
    }
    graos = ((graos / 12) / 1000)
console.log(Math.trunc(graos),"kg")
    i++;
}
 
