let diceRollMap = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
let valuecount = 0;
while(valuecount < 10){
    let dice = Math.floor(Math.random()*10)%6+1;
    valuecount = diceRollMap.get(dice);
    diceRollMap.set(dice,++valuecount);
}
console.log(diceRollMap);
console.log("Minumim dice count:"+Math.min(...diceRollMap.values()));
console.log("Maximum dice value:"+Math.max(...diceRollMap.values()));