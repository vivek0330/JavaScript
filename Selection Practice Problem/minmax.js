let array = new Array();
for (let a = 1; a <= 5; a++) {
    let value = (Math.floor(Math.random() * 900) +100);
    console.log("Random number is :: " +value)
    array.push(value);
}

console.log("max number is :: " +Math.max(...array));
console.log("max number is :: " +Math.min(...array));

