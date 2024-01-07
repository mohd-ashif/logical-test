function givenSum(arr){
    let n = 4;
    let k = 6;
    let count = 0

    for(let i=0; i<n ; i++){
        for(let j =  i+1; j<=n; j++){

            if(arr[i] + arr[j] == k ){
                count++
             
            }
            
        }
    }
    
 
    return count 

}
console.log(givenSum([1,5,7,1]))

