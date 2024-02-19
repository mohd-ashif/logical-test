let n = 4

for (let i = 1; i <= n; i++) {
        let str = '';
for (let j = 1; j <= n - i; j++) {
            str += ' ';
        }
        str += '1';
 for (let j = 2; j <= i; j++) {
            str += j;
        }
 for (let j = i - 1; j >= 1; j--) {
            str += j;
        }
        console.log(str);
    }

