function starItUp(a) {
    let space = "";
    let n = a.length;

    for (let i = 0; i < n; i++) {
        space += a[i];
        if (i < n -1 ) {
            space += "*";
        }
    }

    console.log(space);
}

starItUp('abc');
