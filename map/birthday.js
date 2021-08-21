let birthdayMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);
for (let i = 1; i <= 50; i++) {
    let month = (Math.floor(Math.random() * 100) % 12) + 1;
    let valueCount = birthdayMap.get(month);
    birthdayMap.set(month, ++valueCount);
}
console.log("Month and count of individuals birthday :: ")
console.log(birthdayMap);