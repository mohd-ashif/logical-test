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


// method -2 


var a = "hello";
var n = a.length;
var c = '';

function star() {
    return "*";
}

for (var i = 0; i < n; i++) {
    if (i < n - 1) {
        c += a[i] + star();
    } else {
        c += a[i];
    }
}

console.log(c);
