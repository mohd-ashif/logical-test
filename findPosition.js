function findIndices(a) {
  let n = a.length;
  let count = 0;
  let k = 8;

  for (let i = 0; i < n; i++) {
      for (let j = i +1 ; j <n; j++) {
          if (a[i] === k && a[j] === k) {
              console.log(i, j);
              return; 
      }
  }

  console.log(-1, -1); // Moved this line outside of the inner loop
}

let a1 = [5, 7, 7, 8, 8, 10];
findIndices(a1); // Corrected the function call


var a=[5,7,7,8,8,10]
var num=8;
var n=a.length;
var count=0;

for(i=0;i<n;i++){
if(a[i]===num){
    console.log(i,n-i+1)
    break;
}

if(a[i]!=num){
    count++  
}
if(count===n){
    console.log(-1,-1)
}

}