function threeSum(n, a){
    let result = [] ;
  
    for(let i = 0 ; i <n; i ++){
        for(let j = i+1; j<n ; j++){
            for(let k = j+1; k<n ; k++){
                if (a[i]+a[j]+a[k] === 0){
                    result.push([a[i], a[j], a[k]]);
                }
            }
        }
    }
  
    console.log(result);
  }
  
  threeSum(5, [1,2,-2,0,1]);

