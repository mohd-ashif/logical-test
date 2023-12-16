var a = [1, 1, 2, 3, 4, 1, 1];
var n = a.length;
var count = 0;
var num = 6;

for (let i = 0; i < n; i++) {
    if (a[i] === num) {
        count++;
    }
}

console.log(count);


let a = 1111221;
let count = 0;
let digitToCount = 1;

while (a > 0) {
    let lastDigit = a % 10;  // Extract the last digit
    if (lastDigit === digitToCount) {
        count++;
    }
    a = Math.floor(a / 10);  // Remove the last digit
}

console.log(count);
