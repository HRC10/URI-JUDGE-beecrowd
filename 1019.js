var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let segundos = parseInt(lines.shift());
let minuto = 0;
let hora = 0;
while (segundos > 60){
    segundos = segundos - 60;
    minuto++;
    if (minuto > 60){
        while (minuto > 60){
            minuto = minuto - 60
            hora++;
        }
    }
}
console.log(hora+":"+minuto+":"+segundos)