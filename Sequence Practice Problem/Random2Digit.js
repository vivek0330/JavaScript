let result = 0;
for (let a = 1; a <= 5; a++){
    let value = (Math.floor(Math.random() * 90) + 10);
    console.log("Random 2 Digit value :: " + value);
    result += value;
}
console.log("The sum of five random values is :: " +result);
let avg = result / 5;
console.log("The sum of five random values is :: " +avg);