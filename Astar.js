var n = 5;
var c;

for (var i = 1; i <= n; i++) {
  c = "";

  for (var j = 1; j <= n * 2 - 1; j++) {
  
    if (j === 6-i|| j === 4+i) {
      c += "* ";
    } else {
      c += "  ";
    }
  }

  console.log(c);
}

