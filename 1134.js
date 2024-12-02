let input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

let a =  parseInt(valores.shift());
let alcool = 0;
let gasolina = 0;
let diesel = 0;

while(true){
  if(a == 1){
    alcool++;
  }
  else if(a == 2){
    gasolina++;
  }
  else if(a == 3){
    diesel++;
  }

  else if(a == 4){
    console.log(`MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`);
    break;
  }
  a =  parseInt(valores.shift());
}