const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your DOB (DDMMYYYY): ", (dob) => {
    let sum = 0;

    for (let digit of dob)
        sum += Number(digit);

    while (sum > 9) {
        let temp = 0;

        while (sum > 0) {
            temp += sum % 10;
            sum = Math.floor(sum / 10);
        }

        sum = temp;
    }

    console.log("Your Lucky Number is:", sum);
    rl.close();
});