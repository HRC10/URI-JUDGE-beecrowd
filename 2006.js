var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let t = lines.shift().trim();
const [A,B,C,D,E] = lines.shift().trim().split(" ");
let right = 0;
if (t == A){
    right++;
}
if (t == B){
    right++;
}
if (t == C){
    right++;
}
if (t == D){
    right++;
}
if (t == E){
    right++;
}
console.log(right)