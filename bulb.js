function bulb (n){
    let res ;
    for(let i =1 ; i<=n ; i++){
        res =  i*i ;
        if( res <= n ){
            console.log(res)
        }
    }
 }
 bulb(20)