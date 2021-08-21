let array=new Array();
for(let i=0;i<10;i++){
    let randomNumber=Math.floor(Math.random()*900+100);
    array.push(randomNumber);
}
console.log("Array before sorting");
console.log(array);
//sorting array in ascending manner
array.sort();
console.log("Array after sorting");
console.log(array);
console.log("Second largest number : "+array[8]);
console.log("Second smallest number : "+array[1]);