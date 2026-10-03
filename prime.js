const prompt =require("prompt-sync")();
const n = Number(prompt("Enter number:"));

function prime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0) return false;
    return true;
}

function pal(n) {
    return n == String(n).split("").reverse().join("");
}

if (!prime(n))
    console.log("Not prime");
else {
    let x = n + 1;
    while (!pal(x)) x++;
    console.log("Prime, next palindrome =", x);
}