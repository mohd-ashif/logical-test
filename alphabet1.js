let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
 
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
 
  for (let k = 0; k < 2 * i - 1; k++) {
    string += String.fromCharCode(k + 65);
  }
  string += "\n";
}
console.log(string);
