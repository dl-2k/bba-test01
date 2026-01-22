const { create } = require("node:domain");

function createCharacter(n, l, h) {
    // Khai báo mảng các object: characters có thuộc tính name, level, health.
    const characters = [
        {
            name: n,
            level: l,
            health: h
        },
    ];

    // tạo mảng mới charactersPowerUp
    const charactersPowerUp = characters.map(c => ({
        name: c.name.toUpperCase(),
        level: c.level * 2,
        health: c.health * 3
    }));

    // tạo mảng mới possibleWinner (sử dụng hàm filter đẻ lọc ra  các phần tử có health > 1000)
    const possibleWinner = characters.filter(c => c.health > 1000) || charactersPowerUp.filter(c => c.health > 1000);

    // In ra 2 mảng mới
    console.log(charactersPowerUp);
    console.log(possibleWinner);

}
// Test
createCharacter("maRioooNamlun", 4, 7772);
console.log("==================");


function printLeaderboard(p) {
    const newPlayers = p.sort((a, b) => b.score - a.score);

    for (let i = 0; i < newPlayers.length; i++) {
        let huyChuong = "";
        if (i === 0) {
            huyChuong = "🥇";
        } else if (i === 1) {
            huyChuong = "🥈";

        } else if (i === 2) {
            huyChuong = "🥉";
        } else {
            huyChuong = "  ";
        }
        console.log(`${huyChuong} ${i + 1}. ${newPlayers[i].name} - ${newPlayers[i].score} pts`);

    }
}
// Test
const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 },
]
printLeaderboard(players);