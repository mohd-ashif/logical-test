let n = 5;

for (let i = 1; i <= n; i++) {
    let c = '';

    // Add spaces
    for (let j = 1; j <= n; j++) {
        if (j <= i || j == i  ) {
            c += '*';
        } else {
            c += ' ';
        }
    }

    console.log(c);
}
