let readlinesync = require("readline-sync");
let number = readlinesync.question("Enter a number :: ");
flag = 0;
for (let i = 2; i <= number/2; i++) {
    if (number % i == 0) {
        flag = 1;
    }
}
if (flag == 1) {
    console.log("NOt Prime");
} else {
    console.log("Prime");
}