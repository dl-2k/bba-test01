function findPairsDivisibleBy17() {
    let count = 0;

    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 100; j++) {
            let sumTwoIndex = i + j;
            if (sumTwoIndex % 17 === 0) {
                console.log(`(${i}, ${j}) = ${sumTwoIndex}`);
                count = count + 1;
            }
        }
    }

    console.log(`Tong cong: ${count} cap`);
}

findPairsDivisibleBy17();
