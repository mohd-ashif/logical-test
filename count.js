function sum (k){
arr = [1,5,7,1];
let n = arr.length;
let count =0;
let result;


for (let i = 0 ; i <n ;  i++){
    for(let j = i ; j<n ; j++){


   result  = arr[i] + arr[j];
   if (result == k ) {
    count ++
   }

}
}
console.log(count )
}



