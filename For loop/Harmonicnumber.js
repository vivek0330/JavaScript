"use strict"

let ps = require("prompt-sync");
let prompt = ps();

let number = prompt("Enter a number :: ");
let harmonicNumber = 0;

for (let i = 0; i < number; i++) {
    harmonicNumber = harmonicNumber + (1 / number);
}
console.log("Harmonic Numner :: " +harmonicNumber);