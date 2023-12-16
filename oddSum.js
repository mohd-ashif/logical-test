//method -1

function sumOfOdd(N) {
    let sum = 0;
    let s = [9, 3, 4, 5];

    for (let i = 0; i < N; i++) {
        if (s[i] % 2 !== 0) {
            sum += s[i];
        }
    }

    return sum;
}
console.log(sumOfOdd(4))

//method -2

function sumOfOdd(N) {
    let s = [9, 3, 4, 5];

    let sum = s.reduce((acc, curr) => {
        if (curr % 2 !== 0) {
            return acc + curr;
        } else {
            return acc;
        }
    }, 0);

    return sum;
}

console.log(sumOfOdd(4))

