let money = 100;
let win = 0;
let loss = 0;
while (money > 0 && money < 200) {
	let chance = Math.floor(Math.random() * 1000) % 2;
	if (chance == 0) {
		loss++;
		money--;
	} else {
		win++;
		money++;
	}
}
console.log("total money: " + money);
console.log("total wins: " + win);
console.log("total loss: " + loss);