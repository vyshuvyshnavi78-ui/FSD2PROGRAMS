let n = Number(prompt("Enter a positive integer:"));

function isPrime(n) {
    if (n < 2)
        return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }

    return true;
}

function isPalindrome(n) {
    let original = n;
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    }

    return original === reverse;
}

if (isPrime(n)) {
    let next = n + 1;

    while (!isPalindrome(next)) {
        next++;
    }

    console.log("Prime number");
    console.log("Next palindrome =", next);
} else {
    console.log("Not prime");
}