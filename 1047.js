let input = require("fs").readFileSync('stdin', "utf8");
var valores = input.split(" ");

var hora1 = parseInt(valores.shift());
var minuto1 = parseInt(valores.shift());
var hora2 = parseInt(valores.shift());
var minuto2 = parseInt(valores.shift());

if(hora1 && minuto1 === hora2 && minuto2){
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)")
}
if(hora2 > hora1 && minuto2 >  minuto1){
    var hora3 = hora2-hora1
    var minuto3 = minuto2-minuto1
    console.log("O JOGO DUROU "+hora3,"HORA(S) E "+minuto3,"MINUTO(S)")
}
if (hora2 > hora1 && minuto2 < minuto1){
    let minutos3 = ((hora2*60) + minuto2) - ((hora1*60) + minuto1)
    console.log("O JOGO DUROU 0 HORA(S) E "+ minutos3," MINUTO(S)");
}