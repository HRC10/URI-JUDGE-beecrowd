let input = require("fs").readFileSync('stdin', "utf8");
var valores = input.split(" ");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

if(A>B){
    if(A%B == 0)
        console.log('Sao Multiplos')
    else{
        console.log('Nao sao Multiplos')
    }
}
if(B>A){
    if(B%A == 0)
        console.log('Sao Multiplos')
    else{
        console.log('Nao sao Multiplos')
    }
}
