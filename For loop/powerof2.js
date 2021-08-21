"use strict";

let ps = require("prompt-sync");
let prompt = ps();

let number = prompt("Enter a number :: ");
for (let i = 0; i < number; i++) {
    console.log("2 ^ " + i + " is :: " + 2 ** i);
}

// const readline = require("readline-sync");
// let number = readline.question("Enter a number :: ");
// for (let i = 0; i < number; i++) {
//     console.log("2 ^ " + i + " is : " + 2 ** i);
// }