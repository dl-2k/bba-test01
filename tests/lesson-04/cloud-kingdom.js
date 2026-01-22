let playerName = "Mario";
let currentLives = 3;
const level1 = 25;
const level2 = 30;
const level3 = 45;

// Tính giá trị trung bình coin của 3 level và in ra console.
const sumCoin = level1 + level2 + level3;
const averageCoin = sumCoin / 3;
console.log(`Gia tri trung binh coin cua 3 level la ${averageCoin}`);
console.log("==================");

// In ra số coin dư khi cho 3
const remainCoin = sumCoin % 3;
console.log(`So coin du khi chia cho 3 la ${remainCoin}`);