const prompt = require("prompt-sync")();
const n = parseInt(prompt("Enter an integer: "));

let a = 0, b = 1;
let found = false;

while (a <= n) {
    if (a === n) {
        found = true;
        break;
    }
    [a, b] = [b, a + b];
}

console.log(found ? "Fibonacci number" : "Not a Fibonacci number");